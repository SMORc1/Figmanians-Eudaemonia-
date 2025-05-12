import React, { useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AppStyles, { COLORS, FONT } from '../styles/AppStyles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

const ValidationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { formData } = route.params || {};

  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editableData, setEditableData] = useState({
    firstName: formData?.firstName || '',
    lastName: formData?.lastName || '',
    email: formData?.email || '',
    phoneNumber: formData?.phoneNumber || '',
    dateOfBirth: formData?.dateOfBirth || '',
  });

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

  const handleInputChange = (field, value) => {
    setEditableData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleProceed = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={[AppStyles.container, { paddingHorizontal: 20, paddingTop: 20 }]}>
      
      {/* Back Arrow */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'flex-start', marginTop: 10, marginBottom: 10 }}>
        <Ionicons name="arrow-back" size={28} color={COLORS.prussianBlue} />
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
        {/* Edit Button */}
        <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(!isEditing)}>
          <Ionicons name={isEditing ? 'checkmark-outline' : 'create-outline'} size={22} color={COLORS.prussianBlue} />
        </TouchableOpacity>

        {/* Display or Edit Mode */}
        {['firstName', 'lastName', 'email', 'phoneNumber', 'dateOfBirth'].map((field, index) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <Text style={styles.infoLabel}>{formatFieldName(field)} </Text>
            {isEditing ? (
              <TextInput
                style={styles.inputField}
                value={editableData[field]}
                onChangeText={(text) => handleInputChange(field, text)}
                placeholder={formatFieldName(field)}
                placeholderTextColor={COLORS.gray}
              />
            ) : (
              <Text style={styles.infoText}>{editableData[field]}</Text>
            )}
          </View>
        ))}
      </View>
    </View>
  );
};

const formatFieldName = (field) => {
  switch (field) {
    case 'firstName': return 'First Name:';
    case 'lastName': return 'Last Name:';
    case 'email': return 'Email:';
    case 'phoneNumber': return 'Phone Number:';
    case 'dateOfBirth': return 'Date of Birth:';
    default: return '';
  }
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
    backgroundColor: COLORS.alabaster,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: COLORS.prussianBlue,
    width: '100%',
    marginTop: 10,
    position: 'relative',
  },
  infoText: {
    fontFamily: FONT.body,
    fontSize: 15,
    color: COLORS.prussianBlue,
    marginBottom: 4,
  },
  infoLabel: {
    fontFamily: FONT.bodyBold,
    color: COLORS.prussianBlue,
    fontSize: 15,
  },
  inputField: {
    fontFamily: FONT.body,
    fontSize: 15,
    color: COLORS.prussianBlue,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.ashGray,
    paddingVertical: 2,
  },
  editButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    backgroundColor: COLORS.alabaster,
    borderRadius: 20,
    padding: 5,
    zIndex: 1,
  },
});

export default ValidationScreen;