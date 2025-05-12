import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Animated, Dimensions } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AppStyles, { COLORS, FONT } from '../styles/AppStyles';

const { width, height } = Dimensions.get('window');

const PositiveAffirmationScreen = () => {
  const navigation = useNavigation();
  const quotes = [
    "It is better to conquer yourself than to win a thousand battles.",
    "You are stronger than you think and more capable than you believe.",
    "Every day is a fresh start. Embrace it with positivity.",
    "Believe in yourself and all that you are. Know there is something inside you that is greater than any obstacle.",
    "You have within you right now everything you need to deal with whatever the world throws at you."
  ];

  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  const handleNextQuote = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -50,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      slideAnim.setValue(50);
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start();
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Navigation Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Feather name="chevron-left" size={28} color={COLORS.prussianBlue} />
        </TouchableOpacity>

        <Text style={styles.title}>Positive Affirmations</Text>

        <View style={{ width: 28 }} />
      </View>

      {/* Animated Quote Display - Now Larger */}
      <Animated.View
        style={[
          styles.quoteContainer,
          {
            opacity: fadeAnim,
            transform: [{ translateX: slideAnim }]
          }
        ]}
      >
        <Text style={styles.quoteText}>
          {quotes[currentQuoteIndex]}
        </Text>
      </Animated.View>

      {/* Quote Counter */}
      <Text style={styles.quoteCounter}>
        {currentQuoteIndex + 1}/{quotes.length}
      </Text>

      {/* Refresh Button */}
      <TouchableOpacity
        style={styles.refreshButton}
        onPress={handleNextQuote}
        activeOpacity={0.7}
      >
        <Ionicons name="refresh" size={28} color={COLORS.prussianBlue} />
        <Text style={styles.refreshText}>Next Affirmation</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ivory,
    alignItems: 'center',
  },
  topBar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 50,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.alabaster,
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  title: {
    fontFamily: FONT.header,
    fontSize: 20,
    color: COLORS.prussianBlue,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  quoteContainer: {
    backgroundColor: COLORS.alabaster,
    borderRadius: 20,
    padding: 30,
    width: width * 0.9, // Increased from 0.85
    minHeight: height * 0.45, // Now responsive to screen height
    maxHeight: height * 0.6, // Added maximum height
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.prussianBlue,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginTop: 30, // Reduced top margin
  },
  quoteText: {
    fontFamily: FONT.body,
    fontSize: 22, // Slightly larger text
    color: COLORS.prussianBlue,
    textAlign: 'center',
    lineHeight: 34, // Increased line height
    letterSpacing: 0.3,
    paddingHorizontal: 10, // Added some horizontal padding
  },
  quoteCounter: {
    fontFamily: FONT.body,
    fontSize: 16,
    color: COLORS.prussianBlue,
    marginTop: 20,
    marginBottom: 10,
  },
  refreshButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.alabaster,
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 20, // Adjusted spacing
    shadowColor: COLORS.prussianBlue,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  refreshText: {
    fontFamily: FONT.bodyBold,
    fontSize: 16,
    color: COLORS.prussianBlue,
    marginLeft: 8,
  },
});

export default PositiveAffirmationScreen;