import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AppStyles from '../styles/AppStyles';

const ValidationScreen = ({ navigation }) => {
  return (
    <View style={AppStyles.container}>
      <Text style={AppStyles.title}>Enter OTP</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <TextInput style={[AppStyles.input, { width: 50, textAlign: 'center' }]} keyboardType="numeric" maxLength={1} />
        <TextInput style={[AppStyles.input, { width: 50, textAlign: 'center' }]} keyboardType="numeric" maxLength={1} />
        <TextInput style={[AppStyles.input, { width: 50, textAlign: 'center' }]} keyboardType="numeric" maxLength={1} />
        <TextInput style={[AppStyles.input, { width: 50, textAlign: 'center' }]} keyboardType="numeric" maxLength={1} />
      </View>

      <TouchableOpacity style={AppStyles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={AppStyles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ValidationScreen;
