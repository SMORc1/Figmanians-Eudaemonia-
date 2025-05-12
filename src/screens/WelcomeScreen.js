import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import AppStyles, { COLORS, FONT } from '../styles/AppStyles';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={AppStyles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={AppStyles.logo}
      />
      <Text style={AppStyles.title}>WELCOME</Text>
      <Text
        style={{
          fontFamily: FONT.body,
          fontSize: 16,
          color: COLORS.prussianBlue,
          marginBottom: 40,
          textAlign: 'center',
        }}
      >
        We are here to aid you
      </Text>

      <TouchableOpacity
        style={AppStyles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={AppStyles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={AppStyles.button}
        onPress={() => navigation.navigate('SignUp')}
      >
        <Text style={AppStyles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={AppStyles.googleButton}
        onPress={() => { /* Handle Google Sign-In */ }}
      >
        <Text style={AppStyles.buttonText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;