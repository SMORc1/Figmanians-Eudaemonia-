import React, { useRef, useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AppStyles, { COLORS } from '../styles/AppStyles';

const ForgotPassOTPScreen = () => {
    const navigation = useNavigation();
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
        navigation.navigate('ResetPassScreen'); 
    };

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.ivory }}>
            {/* Back Button */}
            <TouchableOpacity
                style={{ position: 'absolute', top: 60, left: 20, zIndex: 1 }}
                onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={28} color={COLORS.prussianBlue} />
            </TouchableOpacity>

            <ScrollView contentContainerStyle={{ paddingTop: 100, alignItems: 'center', paddingBottom: 40 }}>
                {/* App Logo */}
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={AppStyles.signupLogo}
                />

                {/* Page Title: Forgot Password */}
                <Text style={[AppStyles.title, { fontSize: 32 }]}>Forgot Password</Text>

                {/* Updated Instruction with minimal spacing */}
                <View style={{ marginBottom: 8 }}>
                    <Text style={[AppStyles.description, { textAlign: 'center', lineHeight: 20 }]}>
                        A One-Time Pin (OTP) has been sent to your email,
                    </Text>
                    <Text style={[AppStyles.description, { textAlign: 'center', lineHeight: 20, marginTop: -30 }]}>
                        Please enter the code.
                    </Text>
                </View>

                {/* OTP Boxes */}
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
                    {otp.map((digit, index) => (
                        <TextInput
                            key={index}
                            ref={(ref) => (inputs.current[index] = ref)}
                            style={AppStyles.otpInput}
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
            </ScrollView>
        </View>
    );
};

export default ForgotPassOTPScreen;