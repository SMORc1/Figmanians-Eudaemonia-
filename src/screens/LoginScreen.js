import React from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppStyles from '../styles/AppStyles';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#F4F9E9' }}>
      
      {/* Back Button */}
      <TouchableOpacity
        style={{ position: 'absolute', top: 60, left: 20, zIndex: 1 }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={28} color="#153243" />
      </TouchableOpacity>

      {/* Main Content */}
      <ScrollView contentContainerStyle={{ paddingTop: 100, alignItems: 'center', paddingBottom: 40 }}>
        
        {/* App Logo */}
        <Image
          source={require('../../assets/images/logo.png')}
          style={AppStyles.signupLogo}
        />

        {/* Title */}
        <Text style={AppStyles.title}>Login</Text>

        {/* Input Fields */}
        <TextInput
          placeholder="Email or Phone"
          style={AppStyles.input}
          placeholderTextColor="#888"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={AppStyles.input}
          placeholderTextColor="#888"
        />

        {/* Forgot Password Link */}
        <TouchableOpacity style={{ marginTop: 10 }}>
          <Text style={{
            fontFamily: 'CabinCondensed-Regular',
            fontSize: 16,
            color: '#667085'
          }}
          onPress={() => navigation.navigate('ForgotPassScreen')}>
            Forgot Password?
          </Text>
        </TouchableOpacity>

        {/* Navigation Buttons */}
        <TouchableOpacity
          style={AppStyles.button}
          onPress={() => navigation.navigate('ChatBotStart')}
        >
          <Text style={AppStyles.buttonText}>Chatbot</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[AppStyles.button, { marginTop: 20 }]}
          onPress={() => navigation.navigate('AboutUsScreen')}
        >
          <Text style={AppStyles.buttonText}>About Us</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[AppStyles.button, { marginTop: 20 }]}
          onPress={() => navigation.navigate('CommunityFundraiserScreen')}
        >
          <Text style={AppStyles.buttonText}>Community Fundraiser</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[AppStyles.button, { marginTop: 20 }]}
          onPress={() => navigation.navigate('PoliciesScreen')}
        >
          <Text style={AppStyles.buttonText}>Policies</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[AppStyles.button, { marginTop: 20 }]}
          onPress={() => navigation.navigate('BreathingExerciseScreen')}
        >
          <Text style={AppStyles.buttonText}>Breathing Exercise</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[AppStyles.button, { marginTop: 20 }]}
          onPress={() => navigation.navigate('CalmingVisualsScreen')}
        >
          <Text style={AppStyles.buttonText}>Calming Visuals</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[AppStyles.button, { marginTop: 20 }]}
          onPress={() => navigation.navigate('PositiveAffirmationScreen')}
        >
          <Text style={AppStyles.buttonText}>Positive Affirmation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[AppStyles.button, { marginTop: 20 }]}
          onPress={() => navigation.navigate('AccountSettingsScreen')}
        >
          <Text style={AppStyles.buttonText}>Account Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[AppStyles.button, { marginTop: 20 }]}
          onPress={() => navigation.navigate('FaceCamScreen')}
        >
          <Text style={AppStyles.buttonText}>Face Cam</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[AppStyles.button, { marginTop: 20 }]}
          onPress={() => navigation.navigate('JournalLogScreen')}
        >
          <Text style={AppStyles.buttonText}>Journal Logs</Text>
        </TouchableOpacity>

        {/* Login with Google (No navigation yet) */}
        <TouchableOpacity style={[AppStyles.button, { marginTop: 20 }]}>
          <Text style={AppStyles.buttonText}>Login with Google</Text>
        </TouchableOpacity>

      </ScrollView>

    </View>
  );
};

export default LoginScreen;