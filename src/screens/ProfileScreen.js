import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AppStyles, { COLORS } from '../styles/AppStyles';

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color={COLORS.prussianBlue} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Profile</Text>
        <View style={{ width: 28 }} />
      </View>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={require('../../assets/images/Profile.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.nameText}>Jeongyeon Yoo</Text>
        <Text style={styles.detailText}>29 years old</Text>
        <Text style={styles.detailText}>(+63) 912 3456 789</Text>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <ProfileOptionButton Icon={FontAwesome5} iconName="user-edit" label="Edit Profile" />
          <ProfileOptionButton Icon={Feather} iconName="settings" label="Account Settings" />
          <ProfileOptionButton Icon={FontAwesome5} iconName="book" label="Journal logs" />
          <ProfileOptionButton Icon={Ionicons} iconName="information-circle-outline" label="About Us" />
          <ProfileOptionButton Icon={FontAwesome5} iconName="file-alt" label="Privacy Policy" />
        </View>
      </View>
    </View>
  );
};

const ProfileOptionButton = ({ Icon, iconName, label }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.buttonContent}>
        <Icon name={iconName} size={20} color={COLORS.prussianBlue} style={styles.buttonIcon} />
        <Text style={styles.buttonText}>{label}</Text>
      </View>
      <Feather name="chevron-right" size={24} color={COLORS.prussianBlue} />
    </TouchableOpacity>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ivory,
  },
  header: {
    backgroundColor: COLORS.ivory,
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
    shadowColor: COLORS.prussianBlue,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: AppStyles.title.fontFamily,
    color: COLORS.prussianBlue,
    fontWeight: 'bold',
  },
  profileSection: {
    backgroundColor: COLORS.prussianBlue,
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: COLORS.ivory,
    marginBottom: 15,
  },
  nameText: {
    fontSize: 20,
    fontFamily: AppStyles.bodyBold?.fontFamily ?? 'CabinCondensed-Bold',
    color: COLORS.ivory,
    fontWeight: 'bold',
  },
  detailText: {
    fontSize: 14,
    fontFamily: AppStyles.body?.fontFamily ?? 'CabinCondensed-Regular',
    color: COLORS.ivory,
    marginTop: 2,
  },
  buttonContainer: {
    width: '90%',
    marginTop: 30,
  },
  button: {
    backgroundColor: COLORS.ivory,
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  buttonIcon: {
    marginRight: 15,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: AppStyles.body?.fontFamily ?? 'CabinCondensed-Regular',
    color: COLORS.prussianBlue,
  },
});
