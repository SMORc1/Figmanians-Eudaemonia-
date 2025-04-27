import React, { useEffect, useRef } from 'react';
import { Animated, View, Image, Text, ActivityIndicator } from 'react-native';
import AppStyles, { FONT, COLORS } from '../styles/AppStyles';

const SplashScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        navigation.replace('Welcome');
      }, 2000);
    });
  }, []);

  return (
    <View style={AppStyles.container}>
      <Animated.Image
        source={require('../../assets/images/logo.png')}
        style={[AppStyles.logo, { opacity: fadeAnim }]}
      />
      <Animated.Text
        style={{
          opacity: fadeAnim,
          fontFamily: FONT.header,
          fontSize: 28,
          color: COLORS.prussianBlue,
          marginTop: 20,
          textAlign: 'center',
        }}
      >
        EUDAEMONIA
      </Animated.Text>
      <ActivityIndicator size="large" color={COLORS.indigoDye} style={{ marginTop: 30 }} />
    </View>
  );
};

export default SplashScreen;
