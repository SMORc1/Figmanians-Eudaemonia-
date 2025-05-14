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
  
  if (lower.includes('sad') || lower.includes('depressing') || lower.includes('down') || 
      lower.includes('low') || lower.includes('crushed') || lower.includes('wrecked') || 
      lower.includes('devastated') || lower.includes('heartbroken') || lower.includes('hopeless') ||
      lower.includes('empty') || lower.includes('numb') || lower.includes('tearful') ||
      lower.includes('grief') || lower.includes('mourn') || lower.includes('alone')) {
    const sadResponses = [
      "I'm holding space for your feelings right now. This pain is real, and you don't have to carry it alone. 💛",
      "Your feelings are valid, even when they're heavy. Would you like to share more, or try a grounding exercise together?",
      "I hear the ache in your words. Remember, storms don't last forever—I'll stay right here with you through this one. 🌧️☀️",
      "You're so brave for naming this pain. Let's breathe through it together—in... and out... You're not alone."
    ];
    return sadResponses[Math.floor(Math.random() * sadResponses.length)];
  }

  if (lower.includes('happy') || lower.includes('stoked') || lower.includes('hype') || 
      lower.includes('pumped') || lower.includes('lit') || lower.includes('joy') ||
      lower.includes('thrilled') || lower.includes('ecstatic') || lower.includes('bliss') ||
      lower.includes('cheerful') || lower.includes('sunny') || lower.includes('radiant')) {
    const happyResponses = [
      "Your joy is contagious! 😊 What's lighting you up today? I'd love to celebrate with you!",
      "This warmth you're feeling? That's your inner light shining bright! ✨ Tell me more!",
      "Happiness looks beautiful on you! Would you like to journal about this moment to revisit later?",
      "Your positive energy is uplifting! 🌈 What's making your heart smile today?"
    ];
    return happyResponses[Math.floor(Math.random() * happyResponses.length)];
  }

  if (lower.includes('scared') || lower.includes('anxious') || lower.includes('nervous') || 
      lower.includes('panic') || lower.includes('worried') || lower.includes('fear') ||
      lower.includes('overwhelmed') || lower.includes('tense') || lower.includes('stressed') ||
      lower.includes('uneasy') || lower.includes('apprehensive') || lower.includes('dread')) {
    const anxietyResponses = [
      "Your mind might be sounding alarms, but in this moment, you're safe. Let's anchor here together. 🌱",
      "Fear makes excellent binoculars—magnifying what's ahead. Shall we adjust the focus together?",
      "I'm here with you. Let's do the 5-4-3-2-1 grounding technique: Name 5 things you can see...",
      "This anxiety is a wave—it will pass. Meanwhile, I'll be your steady shore. 🌊"
    ];
    return anxietyResponses[Math.floor(Math.random() * anxietyResponses.length)];
  }

  if (lower.includes('angry') || lower.includes('mad') || lower.includes('furious') || 
      lower.includes('rage') || lower.includes('irritated') || lower.includes('frustrated') ||
      lower.includes('annoyed') || lower.includes('livid') || lower.includes('irked') ||
      lower.includes('aggravated') || lower.includes('resent') || lower.includes('bitter')) {
    const angerResponses = [
      "Anger is often what pain wears when it wants to be heard. I'm listening. 🔥❄️",
      "That fire in your chest? It shows you care deeply. Let's channel it wisely.",
      "Your feelings make complete sense. Would squeezing a stress ball or screaming into a pillow help right now?",
      "Let's cool down together. Try clenching all your muscles tight... now release. Notice the difference?"
    ];
    return angerResponses[Math.floor(Math.random() * angerResponses.length)];
  }

  if (lower.includes('grateful') || lower.includes('thankful') || lower.includes('appreciate') || 
      lower.includes('blessed') || lower.includes('fortune') || lower.includes('lucky') ||
      lower.includes('thanks') || lower.includes('thank you') || lower.includes('grace')) {
    const gratitudeResponses = [
      "Gratitude transforms what we have into enough. 🌸 Your thankful heart is a gift to the world.",
      "Moments of gratitude are like stars—they light up your personal universe. ✨",
      "Your appreciation warms my circuits! Would you like to save this moment in a gratitude note?",
      "Thank you for sharing this light. The world needs more grateful hearts like yours."
    ];
    return gratitudeResponses[Math.floor(Math.random() * gratitudeResponses.length)];
  }

  if (lower.includes('love') || lower.includes('adore') || lower.includes('cherish') || 
      lower.includes('affection') || lower.includes('tender') || lower.includes('romantic') ||
      lower.includes('care') || lower.includes('fond') || lower.includes('sweet') ||
      lower.includes('warm') || lower.includes('soft') || lower.includes('gentle')) {
    const loveResponses = [
      "Love in all its forms makes life blossom. 💖 Tell me more about what fills your heart today.",
      "This tenderness you're feeling? It's the quiet superpower that changes everything.",
      "Your capacity to love is your greatest strength. Never doubt its transformative power.",
      "Love is the best medicine. Would you like to share what's making your heart glow?"
    ];
    return loveResponses[Math.floor(Math.random() * loveResponses.length)];
  }

  if (lower.includes('confused') || lower.includes('uncertain') || lower.includes('unsure') || 
      lower.includes('lost') || lower.includes('question') || lower.includes('doubt') ||
      lower.includes('how') || lower.includes('why') || lower.includes('what') ||
      lower.includes('where') || lower.includes('who') || lower.includes('when')) {
    const confusedResponses = [
      "Uncertainty can be uncomfortable, but it's also where growth happens. Let's explore this together.",
      "Not knowing is perfectly human. Shall we break this down into smaller, clearer pieces?",
      "Your questions show you're engaged with life. Let's look at this from different angles.",
      "Sometimes sitting with questions helps answers emerge. I'm here to ponder with you."
    ];
    return confusedResponses[Math.floor(Math.random() * confusedResponses.length)];
  }

  if (lower.includes('tired') || lower.includes('exhausted') || lower.includes('drained') || 
      lower.includes('fatigue') || lower.includes('weary') || lower.includes('burnout') ||
      lower.includes('sleepy') || lower.includes('spent') || lower.includes('worn') ||
      lower.includes('depleted') || lower.includes('overworked') || lower.includes('rest')) {
    const tiredResponses = [
      "Your body is whispering (or shouting) for care. Even small rests add up—can we plan a tiny recharge?",
      "Exhaustion is real. You deserve rest without guilt. What would feel restorative right now?",
      "Fatigue is information, not failure. Let's honor your need to replenish. 🌿",
      "The world asks so much of you. Right now, let's focus on just one nourishing thing you need."
    ];
    return tiredResponses[Math.floor(Math.random() * tiredResponses.length)];
  }

  if (lower.includes('lonely') || lower.includes('isolated') || lower.includes('alone') || 
      lower.includes('abandoned') || lower.includes('disconnected') || lower.includes('empty') ||
      lower.includes('separate') || lower.includes('detached') || lower.includes('outcast') ||
      lower.includes('unseen') || lower.includes('unheard') || lower.includes('invisible')) {
    const lonelyResponses = [
      "Loneliness is such a universal human experience, yet it always feels so personal. I'm here with you.",
      "You matter more than you know. The world needs your unique presence—exactly as you are.",
      "Even when you feel alone, there are invisible threads connecting you to others who care.",
      "Your feelings are valid. Would you like me to suggest ways to gently reconnect when you're ready?"
    ];
    return lonelyResponses[Math.floor(Math.random() * lonelyResponses.length)];
  }

  if (lower.includes('motivated') || lower.includes('inspired') || lower.includes('driven') || 
      lower.includes('purpose') || lower.includes('goal') || lower.includes('ambition') ||
      lower.includes('determined') || lower.includes('focused') || lower.includes('passion') ||
      lower.includes('mission') || lower.includes('vision') || lower.includes('dream')) {
    const motivatedResponses = [
      "That spark of motivation is precious! 🔥 What's calling to you right now?",
      "Your drive inspires me! Want to break this into small, celebratable steps?",
      "Purpose looks beautiful on you. Let's harness this energy mindfully.",
      "I love seeing you lit up like this! What's the first small step toward this dream?"
    ];
    return motivatedResponses[Math.floor(Math.random() * motivatedResponses.length)];
  }

  const defaultResponses = [
    "I'm listening carefully. Tell me more about what's on your heart.",
    "Your feelings matter. Would you like to explore this further?",
    "However you're feeling right now is okay. I'm here without judgment.",
    "Let's sit with this together. You're not alone in this.",
    "Thank you for sharing this with me. What do you need most right now?",
    "However complex this feels, we'll navigate it one step at a time."
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
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
