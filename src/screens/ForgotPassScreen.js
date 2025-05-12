import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import AppStyles, { COLORS } from '../styles/AppStyles';

const ForgotPassScreen = () => {
    const navigation = useNavigation();

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
                <View style={{ marginBottom: 8 }}>
                    <Text style={[AppStyles.description, { textAlign: 'center', lineHeight: 20 }]}>
                        Please enter your email
                    </Text>
                    <Text style={[AppStyles.description, { textAlign: 'center', lineHeight: 20, marginTop: -30 }]}>
                        or mobile number to retrieve your account.
                    </Text>
                </View>

                {/* Input field for email or phone num */}
                <TextInput
                    placeholder="Email or Phone Number"
                    style={AppStyles.input}
                    placeholderTextColor="#888"
                />

                <TouchableOpacity 
                    style={[AppStyles.button, { marginTop: 20 }]}
                    onPress={() => navigation.navigate('ForgotPassOTPScreen')}
                >
                    <Text style={AppStyles.buttonText}>
                        Send OTP
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default ForgotPassScreen;