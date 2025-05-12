import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import AppStyles, { COLORS, FONT } from '../styles/AppStyles';

const ChatBotStartScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* App Bar */}
      <View style={styles.appBar}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Feather name="chevron-left" size={28} color={COLORS.prussianBlue} />
        </TouchableOpacity>
        <Text style={styles.title}>Chatbot Start</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView 
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo Container */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* Heading */}
        <Text style={styles.heading}>Welcome!</Text>

        {/* Description */}
        <View style={styles.textContainer}>
          <Text style={styles.paragraph}>
            Meet Eudaemonia, your AI-driven companion for mental wellness! Chat with our bot to discover personalized emotional support, stress management tools, and much more.
          </Text>

          <Text style={[styles.paragraph, { marginBottom: 30 }]}>
            Tap 'Start Chat' below to begin your journey toward better emotional well-being.
          </Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Start Chat Button */}
        <TouchableOpacity 
          style={styles.startButton}
          onPress={() => navigation.navigate('ChatBotScreen')}
          activeOpacity={0.8}
        >
          <Text style={styles.startButtonText}>Start Chat</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ivory,
  },
  appBar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.alabaster,
    marginTop: 10,
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  title: {
    color: COLORS.prussianBlue,
    fontSize: 20,
    fontFamily: FONT.header,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    alignItems: 'center',
  },
  imageContainer: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: COLORS.ivory,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    shadowColor: COLORS.prussianBlue,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: '60%',
    height: '60%',
  },
  heading: {
    color: COLORS.prussianBlue,
    fontSize: 32,
    fontFamily: FONT.header,
    textAlign: 'center',
    marginBottom: 24,
    letterSpacing: 0.5,
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },
  paragraph: {
    color: COLORS.prussianBlue,
    fontSize: 16,
    fontFamily: FONT.body,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  divider: {
    height: 1,
    width: '80%',
    backgroundColor: COLORS.gray,
    marginVertical: 30,
    opacity: 0.5,
  },
  startButton: {
    backgroundColor: COLORS.indigoDye,
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 30,
    shadowColor: COLORS.prussianBlue,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  startButtonText: {
    color: COLORS.ivory,
    fontSize: 18,
    fontFamily: FONT.bodyBold,
    letterSpacing: 0.5,
  },
});

export default ChatBotStartScreen;