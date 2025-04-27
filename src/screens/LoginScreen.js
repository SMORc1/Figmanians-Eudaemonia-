import React from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppStyles from '../styles/AppStyles';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={AppStyles.container}>
      {/* Back Arrow */}
      <TouchableOpacity
        style={{ position: 'absolute', top: 60, left: 20 }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={28} color="#153243" />
      </TouchableOpacity>

      {/* Logo */}
      <Image
        source={require('../../assets/images/logo.png')} 
        style={AppStyles.signupLogo} // using signupLogo to keep sizes consistent
      />

      {/* Login Title */}
      <Text style={AppStyles.title}>Login</Text>

      {/* Inputs */}
      <TextInput placeholder="Email or Phone" style={AppStyles.input} placeholderTextColor="#888" />
      <TextInput placeholder="Password" secureTextEntry style={AppStyles.input} placeholderTextColor="#888" />

      {/* Forgot Password Link */}
      <TouchableOpacity style={{ marginTop: 10 }}>
        <Text>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={AppStyles.button}>
        <Text style={AppStyles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Google Login Button */}
      <TouchableOpacity style={AppStyles.button}>
        <Text style={AppStyles.buttonText}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
