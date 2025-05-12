import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import AppStyles, { COLORS } from '../styles/AppStyles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ResetPassScreen = () => {
    const navigation = useNavigation();
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
    });

    const handleChange = (key, value) => {
        setFormData({ ...formData, [key]: value });
    };

    const handleChangePassword = () => {
        console.log('Changed Password:', formData);
        navigation.navigate('ChangePassSuccess');
    }

    const { password } = formData;

    const isLengthValid = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

    return (
        <ScrollView contentContainerStyle={ AppStyles.signupContainer }>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignSelf: 'flex-start', marginLeft: 20 }}>
                <Ionicons name='arrow-back' size={26} color={COLORS.prussianBlue} />
            </TouchableOpacity>
        
        {/* Logo */}
            <Image
            source={require('../../assets/images/logo.png')}
            style={AppStyles.signupLogo}/>

        {/* Title */}
            <View style={AppStyles.signupHeader}>
                <Text style={AppStyles.signupTitle}>Forgot Password</Text>
            </View>

        {/* Form */}
        <View style={AppStyles.signupForm}>
            <TextInput
            placeholder='Password'
            placeholderTextColor={"#999"}
            style={AppStyles.signupInput}
            value={formData.password}
            onChangeText={(text) => handleChange('password', text)}
            secureTextEntry
            />

            <TextInput
            placeholder='Confirm Password'
            placeholderTextColor={"#999"}
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

        {/* Confirm Button */}
        <TouchableOpacity style={AppStyles.registerButton} onPress={handleChangePassword}>
            <Text style={AppStyles.registerButtonText}>Change Password</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>

    );
};

export default ResetPassScreen;