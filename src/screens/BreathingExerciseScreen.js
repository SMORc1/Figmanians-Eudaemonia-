import React, { useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import AppStyles, { COLORS, FONT } from '../styles/AppStyles';

const BreathingExerciseScreen = () => {
  const navigation = useNavigation();
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 4000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
        }),
      ])
    );
    animation.start();
    return () => animation.stop();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: COLORS.ivory }]}>
      {/* App Bar */}
      <View style={[styles.appBar, { backgroundColor: COLORS.ivory, borderBottomColor: COLORS.gray }]}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Feather name="chevron-left" size={28} color={COLORS.prussianBlue} />
        </TouchableOpacity>
        <Text style={[styles.title, { color: COLORS.prussianBlue, fontFamily: FONT.header }]}>
          Breathing Exercise
        </Text>
        <View style={{ width: 28 }} />
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={[styles.holdText, { color: COLORS.prussianBlue, fontFamily: FONT.body }]}>
          Hold
        </Text>

        {/* Animated Circle */}
        <Animated.View style={[
          styles.circle, 
          { 
            backgroundColor: COLORS.indigoDye,
            transform: [{ scale: scaleAnim }] 
          }
        ]}>
          <Image
            source={require('../../assets/images/breathing-icon.png')}
            style={[styles.breathingImage, { tintColor: COLORS.ivory }]}
            resizeMode="contain"
          />
        </Animated.View>

        {/* Decorations */}
        <Image
          source={require('../../assets/images/top-decor.png')}
          style={styles.topDecor}
        />
        <Image
          source={require('../../assets/images/bottom-decor.png')}
          style={styles.bottomDecor}
        />
      </View>
    </View>
  );
};

export default BreathingExerciseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  appBar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingBottom: 30, 
  },
  holdText: {
    fontSize: 24,
    marginBottom: 30,
  },
  circle: {
    width: 220, 
    height: 220,
    borderRadius: 110,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.prussianBlue,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  breathingImage: {
    width: 110,
    height: 110,
  },
  topDecor: {
    position: 'absolute',
    top: 40,
    right: 30,
    width: 80,
    height: 80,
    opacity: 0.8,
  },
  bottomDecor: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    width: 80,
    height: 80,
    opacity: 0.8,
  },
});