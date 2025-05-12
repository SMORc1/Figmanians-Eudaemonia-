import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, Dimensions, Animated } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AppStyles, { COLORS, FONT } from '../styles/AppStyles';

const { width, height } = Dimensions.get('window');

const images = [
  require('../../assets/images/visual1.png'),
  require('../../assets/images/visual2.png'),
  require('../../assets/images/visual3.png'),
];

const CalmingVisualsScreen = () => {
  const navigation = useNavigation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  const handleNextImage = () => {
    // Start fade out and slide animation
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
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
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
      {/* App Bar */}
      <View style={styles.appBar}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Feather name="chevron-left" size={28} color={COLORS.prussianBlue} />
        </TouchableOpacity>
        <Text style={styles.title}>Calming Visuals</Text>
        <View style={{ width: 28 }} />
      </View>

      {/* Animated Image Viewer */}
      <View style={styles.imageContainer}>
        <Animated.Image
          source={images[currentImageIndex]}
          style={[
            styles.image,
            {
              opacity: fadeAnim,
              transform: [{ translateX: slideAnim }]
            }
          ]}
          resizeMode="cover"
        />
      </View>

      {/* Controls */}
      <View style={styles.controlsContainer}>
        <Text style={styles.imageCounter}>
          {currentImageIndex + 1}/{images.length}
        </Text>
        
        <TouchableOpacity 
          style={styles.refreshButton}
          onPress={handleNextImage}
          activeOpacity={0.7}
        >
          <Ionicons 
            name="refresh" 
            size={28} 
            color={COLORS.prussianBlue} 
          />
          <Text style={styles.refreshText}>Next Visual</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ivory,
    alignItems: 'center',
  },
  appBar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.alabaster,
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
  imageContainer: {
    marginTop: 40,
    width: width * 0.85,
    height: height * 0.55,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: COLORS.ivory,
    shadowColor: COLORS.prussianBlue,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  controlsContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  imageCounter: {
    color: COLORS.prussianBlue,
    fontFamily: FONT.body,
    fontSize: 16,
    marginBottom: 12,
  },
  refreshButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.alabaster,
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 24,
    shadowColor: COLORS.prussianBlue,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  refreshText: {
    color: COLORS.prussianBlue,
    fontFamily: FONT.bodyBold,
    fontSize: 16,
    marginLeft: 8,
  },
});
export default CalmingVisualsScreen;