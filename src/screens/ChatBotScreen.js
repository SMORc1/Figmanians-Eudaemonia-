import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet,Keyboard} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppStyles, { COLORS, FONT } from '../styles/AppStyles';

const ChatBotScreen = ({ navigation }) => {
  const [messages, setMessages] = useState([
    { id: '1', sender: 'Eudaemonia', text: 'Hello! How can I assist you today?' }
  ]);
  const [inputText, setInputText] = useState('');
  const [keyboardOffset, setKeyboardOffset] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      (e) => {
        setKeyboardOffset(e.endCoordinates.height - 34);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardOffset(0);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleSend = () => {
    if (inputText.trim() === '') return;

    const newMessage = { id: Date.now().toString(), sender: 'You', text: inputText };
    setMessages([...messages, newMessage]);
    setInputText('');

    setTimeout(() => {
      const reply = detectMood(newMessage.text);
      setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'Eudaemonia', text: reply }]);
    }, 500);
  };

  const detectMood = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes('sad')) return "I'm sorry you're feeling sad. 🥺 Let's find ways to lift your mood!";
    if (lower.includes('happy')) return "I'm glad you're feeling happy! 😊 Keep shining!";
    if (lower.includes('excited')) return "Excitement is wonderful! 🚀 Tell me more!";
    if (lower.includes('angry')) return "It's okay to feel angry sometimes. 😤 Let's try some calming strategies.";
    if (lower.includes('scared')) return "Feeling scared is tough. 😨 I'm here to support you.";
    if (lower.includes('tender')) return "Tender feelings are precious. 💖 Tell me what's on your heart.";
    return "I'm here to support you! Tell me more.";
  };

  const renderItem = ({ item }) => (
    <View style={[
      styles.messageBubble,
      item.sender === 'You' ? styles.userBubble : styles.botBubble
    ]}>
      <Text style={[
        styles.messageText,
        item.sender === 'You' ? styles.userText : styles.botText
      ]}>
        {item.text}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={28} color={COLORS.prussianBlue} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Chat with Eudaemonia!
        </Text>

        <TouchableOpacity style={styles.menuButton}>
          <Ionicons name="ellipsis-horizontal" size={28} color={COLORS.prussianBlue} />
        </TouchableOpacity>
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.messagesContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Input Box */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={[styles.inputContainer, { bottom: keyboardOffset > 0 ? keyboardOffset : 20 }]}
        keyboardVerticalOffset={90}
      >
        <TextInput
          value={inputText}
          onChangeText={setInputText}
          placeholder="Write a message"
          placeholderTextColor={COLORS.gray}
          style={styles.inputField}
        />
        <TouchableOpacity 
          onPress={handleSend}
          style={styles.sendButton}
        >
          <Ionicons name="send" size={24} color={COLORS.ivory} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ivory,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.ashGray,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontFamily: FONT.bodyBold,
    fontSize: 18,
    color: COLORS.prussianBlue,
    textAlign: 'center',
    flex: 1,
  },
  menuButton: {
    padding: 8,
  },
  messagesContainer: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 100,
  },
  messageBubble: {
    borderRadius: 20,
    padding: 16,
    marginVertical: 8,
    maxWidth: '80%',
  },
  botBubble: {
    alignSelf: 'flex-start',
    backgroundColor: COLORS.alabaster,
    borderBottomLeftRadius: 4,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: COLORS.indigoDye,
    borderBottomRightRadius: 4,
  },
  botText: {
    color: COLORS.prussianBlue,
    fontFamily: FONT.body,
    fontSize: 16,
    lineHeight: 22,
  },
  userText: {
    color: COLORS.ivory,
    fontFamily: FONT.body,
    fontSize: 16,
    lineHeight: 22,
  },
  inputContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: COLORS.ivory,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: COLORS.alabaster,
  },
  inputField: {
    flex: 1,
    fontFamily: FONT.body,
    fontSize: 16,
    color: COLORS.prussianBlue,
    backgroundColor: COLORS.alabaster,
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginRight: 8,
  },
  sendButton: {
    backgroundColor: COLORS.indigoDye,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatBotScreen;