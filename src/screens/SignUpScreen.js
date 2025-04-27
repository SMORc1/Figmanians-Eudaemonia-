import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, Platform } from 'react-native';
import AppStyles, { COLORS } from '../styles/AppStyles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);

    const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
    handleChange('dateOfBirth', formattedDate);
  };

  const handleRegister = () => {
    console.log('Registered:', formData);
  };

  const { password } = formData;

  // Password Validation Checks
  const isLengthValid = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*]/.test(password);

  return (
    <ScrollView contentContainerStyle={AppStyles.signupContainer} showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'flex-start', marginLeft: 20 }}>
        <Ionicons name="arrow-back" size={26} color={COLORS.prussianBlue} />
      </TouchableOpacity>

      {/* Logo */}
      <Image
        source={require('../../assets/images/logo.png')}
        style={AppStyles.signupLogo}
      />

      {/* Title */}
      <View style={AppStyles.signupHeader}>
        <Text style={AppStyles.signupTitle}>Register</Text>
      </View>

      {/* Form */}
      <View style={AppStyles.signupForm}>
        <TextInput
          placeholder="First Name"
          placeholderTextColor="#999"
          style={AppStyles.signupInput}
          value={formData.firstName}
          onChangeText={(text) => handleChange('firstName', text)}
        />
        <TextInput
          placeholder="Last Name"
          placeholderTextColor="#999"
          style={AppStyles.signupInput}
          value={formData.lastName}
          onChangeText={(text) => handleChange('lastName', text)}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#999"
          style={AppStyles.signupInput}
          value={formData.email}
          onChangeText={(text) => handleChange('email', text)}
        />
        <TextInput
          placeholder="Phone Number"
          placeholderTextColor="#999"
          style={AppStyles.signupInput}
          value={formData.phoneNumber}
          onChangeText={(text) => handleChange('phoneNumber', text)}
          keyboardType="phone-pad"
        />

        {/* Date Picker */}
        <TouchableOpacity
          style={AppStyles.signupInput}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={{ color: formData.dateOfBirth ? '#000' : '#999', fontFamily: 'CabinCondensed-Regular', fontSize: 14 }}>
            {formData.dateOfBirth ? formData.dateOfBirth : 'Date of Birth'}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDate}
            maximumDate={new Date()}
          />
        )}

        {/* Password Fields */}
        <TextInput
          placeholder="Password"
          placeholderTextColor="#999"
          style={AppStyles.signupInput}
          value={formData.password}
          onChangeText={(text) => handleChange('password', text)}
          secureTextEntry
        />
        <TextInput
          placeholder="Confirm Password"
          placeholderTextColor="#999"
          style={AppStyles.signupInput}
          value={formData.confirmPassword}
          onChangeText={(text) => handleChange('confirmPassword', text)}
          secureTextEntry
        />

        {/* Dynamic Password Policies */}
        <View style={AppStyles.passwordContainer}>
          <Text style={AppStyles.passwordPoliciesTitle}>Password must contain:</Text>

          <Text style={[AppStyles.passwordPolicies, { color: isLengthValid ? 'green' : COLORS.prussianBlue }]}>
            {isLengthValid ? '✅' : '❌'} Minimum 8 characters
          </Text>
          <Text style={[AppStyles.passwordPolicies, { color: hasUppercase ? 'green' : COLORS.prussianBlue }]}>
            {hasUppercase ? '✅' : '❌'} At least one uppercase letter
          </Text>
          <Text style={[AppStyles.passwordPolicies, { color: hasLowercase ? 'green' : COLORS.prussianBlue }]}>
            {hasLowercase ? '✅' : '❌'} At least one lowercase letter
          </Text>
          <Text style={[AppStyles.passwordPolicies, { color: hasNumber ? 'green' : COLORS.prussianBlue }]}>
            {hasNumber ? '✅' : '❌'} At least one number (0-9)
          </Text>
          <Text style={[AppStyles.passwordPolicies, { color: hasSpecialChar ? 'green' : COLORS.prussianBlue }]}>
            {hasSpecialChar ? '✅' : '❌'} At least one special character (!@#$%^&*)
          </Text>
        </View>

        {/* Register Button */}
        <TouchableOpacity style={AppStyles.registerButton} onPress={handleRegister}>
          <Text style={AppStyles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;
