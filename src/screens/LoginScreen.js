import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppStyles from '../styles/AppStyles';

const LoginScreen = ({ navigation }) => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You can add your validation here.
    // If login is successful:
    navigation.replace('Home');
  };

  return (
    <View style={AppStyles.container}>
      {/* Back Arrow */}
      <TouchableOpacity
        style={{ position: 'absolute', top: 90, left: 20 }}
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
      <TextInput
        placeholder="Email or Phone"
        style={AppStyles.input}
        placeholderTextColor="#888"
        value={emailOrPhone}
        onChangeText={setEmailOrPhone}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={AppStyles.input}
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
      />

      {/* Forgot Password Link */}
      <TouchableOpacity style={{ marginTop: 10 }}>
        <Text>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={AppStyles.button} onPress={handleLogin}>
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
