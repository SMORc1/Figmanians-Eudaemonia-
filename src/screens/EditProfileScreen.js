import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppStyles, { COLORS } from '../styles/AppStyles';

const EditProfileScreen = () => {
  const navigation = useNavigation();

  const [focusedField, setFocusedField] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const formatDate = (text) => {
    const cleaned = text.replace(/\D/g, '').slice(0, 8);
    const parts = [cleaned.slice(0, 2), cleaned.slice(2, 4), cleaned.slice(4, 8)].filter(Boolean);
    return parts.join('/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={28} color={COLORS.prussianBlue} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Edit Profile</Text>
          <View style={{ width: 28 }} />
        </View>

        <Image source={require('../../assets/images/Profile.jpg')} style={styles.profileImage} />

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="First Name"
            value={firstName}
            onChangeText={setFirstName}
            style={[styles.input, focusedField === 'firstName' && styles.focusedInput]}
            onFocus={() => setFocusedField('firstName')}
            onBlur={() => setFocusedField('')}
            placeholderTextColor={COLORS.prussianBlue}
          />
          <TextInput
            placeholder="Last Name"
            value={lastName}
            onChangeText={setLastName}
            style={[styles.input, focusedField === 'lastName' && styles.focusedInput]}
            onFocus={() => setFocusedField('lastName')}
            onBlur={() => setFocusedField('')}
            placeholderTextColor={COLORS.prussianBlue}
          />
          <TextInput
            placeholder="Date of Birth"
            value={dateOfBirth}
            onChangeText={(text) => setDateOfBirth(formatDate(text))}
            style={[styles.input, focusedField === 'dateOfBirth' && styles.focusedInput]}
            onFocus={() => setFocusedField('dateOfBirth')}
            onBlur={() => setFocusedField('')}
            placeholderTextColor={COLORS.prussianBlue}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            style={[styles.input, focusedField === 'phoneNumber' && styles.focusedInput]}
            onFocus={() => setFocusedField('phoneNumber')}
            onBlur={() => setFocusedField('')}
            placeholderTextColor={COLORS.prussianBlue}
            keyboardType="phone-pad"
            maxLength={11}
          />
        </View>

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ivory,
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: AppStyles.title.fontFamily,
    color: COLORS.prussianBlue,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    fontFamily: AppStyles.body?.fontFamily ?? 'CabinCondensed-Regular',
  },
  focusedInput: {
    borderColor: COLORS.prussianBlue,
  },
  buttonGroup: {
    marginTop: 20,
  },
  button: {
    backgroundColor: COLORS.prussianBlue,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: COLORS.ivory,
    textAlign: 'center',
    fontFamily: AppStyles.bodyBold?.fontFamily ?? 'CabinCondensed-Bold',
  },
});