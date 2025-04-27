import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AppStyles, { COLORS, FONT } from '../styles/AppStyles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'; // ✅ import useRoute

const ValidationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute(); // ✅ get the route object
  const { formData } = route.params || {}; // ✅ safely extract formData

  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    if (text.length > 1) {
      text = text.charAt(text.length - 1);
    }

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text !== '' && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleProceed = () => {
    navigation.navigate('Login'); // After validation, goes to Login screen
  };

  return (
    <View style={[AppStyles.container, { paddingHorizontal: 20, paddingTop: 40 }]}>
      {/* Back Arrow */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'flex-start', marginBottom: 10 }}>
        <Ionicons name="arrow-back" size={26} color={COLORS.prussianBlue} />
      </TouchableOpacity>

      {/* Logo */}
      <Image
        source={require('../../assets/images/logo.png')}
        style={{ width: 120, height: 120, resizeMode: 'contain', marginBottom: 20 }}
      />

      {/* Instruction */}
      <Text style={{ fontFamily: FONT.body, fontSize: 16, color: COLORS.prussianBlue, textAlign: 'center', marginBottom: 20 }}>
        A One-Time Pin (OTP) has been sent to your email. Please enter the code.
      </Text>

      {/* OTP Boxes */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
          />
        ))}
      </View>

      {/* Proceed Button */}
      <TouchableOpacity style={AppStyles.button} onPress={handleProceed}>
        <Text style={AppStyles.buttonText}>Proceed</Text>
      </TouchableOpacity>

      {/* Confirm Info Section */}
      <Text style={{ 
        fontFamily: FONT.header, 
        fontSize: 22, 
        color: COLORS.prussianBlue, 
        textAlign: 'center', 
        marginTop: 30, 
        marginBottom: 10 
      }}>
        Is this information correct?
      </Text>

      {/* Info Box */}
      <View style={styles.infoBox}>
        <TouchableOpacity style={styles.editButton}>
          <Ionicons name="create-outline" size={20} color={COLORS.prussianBlue} />
        </TouchableOpacity>

        <Text style={styles.infoText}><Text style={styles.infoLabel}>First Name:</Text> {formData?.firstName}</Text>
        <Text style={styles.infoText}><Text style={styles.infoLabel}>Last Name:</Text> {formData?.lastName}</Text>
        <Text style={styles.infoText}><Text style={styles.infoLabel}>Email:</Text> {formData?.email}</Text>
        <Text style={styles.infoText}><Text style={styles.infoLabel}>Phone number:</Text> {formData?.phoneNumber}</Text>
        <Text style={styles.infoText}><Text style={styles.infoLabel}>Date of Birth:</Text> {formData?.dateOfBirth}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1.5,
    borderColor: COLORS.indigoDye,
    borderRadius: 25,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: FONT.body,
    marginHorizontal: 8,
    backgroundColor: COLORS.alabaster,
  },
  infoBox: {
    backgroundColor: COLORS.ivory,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.ashGray,
    width: '100%',
    marginTop: 10,
    position: 'relative',
  },
  infoText: {
    fontFamily: FONT.body,
    fontSize: 15,
    color: COLORS.prussianBlue,
    marginBottom: 6,
  },
  infoLabel: {
    fontFamily: FONT.bodyBold,
    color: COLORS.prussianBlue,
  },
  editButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: COLORS.alabaster,
    borderRadius: 20,
    padding: 5,
  },
});

export default ValidationScreen;
