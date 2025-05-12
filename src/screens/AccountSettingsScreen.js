import React, { useState } from 'react';
import { View, Switch, ScrollView, TouchableOpacity, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import AppStyles, { COLORS, FONT } from '../styles/AppStyles';

const settingsOptions = [
  { 
    id: 1, 
    label: 'Allow AI to Analyze\nText Entries',
    icon: 'activity' 
  },
  { 
    id: 2, 
    label: 'Allow to send\nNotifications',
    icon: 'bell' 
  },
  { 
    id: 3, 
    label: 'Automatically Delete\nEntries After 30 Days',
    icon: 'trash-2' 
  },
  { 
    id: 4, 
    label: 'Use data for AI\nPersonalization',
    icon: 'user' 
  },
  { 
    id: 5, 
    label: 'Daily Mood Check-\nIn Reminders',
    icon: 'calendar' 
  },
  { 
    id: 6, 
    label: 'AI Wellness Tips &\nMotivational Messages',
    icon: 'message-square' 
  },
];

const AccountSettingsScreen = ({ navigation }) => {
  const [switchStates, setSwitchStates] = useState(
    settingsOptions.reduce((acc, setting) => ({ ...acc, [setting.id]: false }), {})
  );

  const toggleSwitch = (id) => {
    setSwitchStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Feather name="chevron-left" size={28} color={COLORS.prussianBlue} />
          </TouchableOpacity>
          <Text style={styles.title}>Account Settings</Text>
          <View style={{ width: 28 }} /> {/* For layout balance */}
        </View>

        {/* Settings Options */}
        <View style={styles.settingsContainer}>
          {settingsOptions.map((setting) => (
            <View key={setting.id} style={styles.settingItem}>
              <View style={styles.labelContainer}>
                <Feather 
                  name={setting.icon} 
                  size={24} 
                  color={COLORS.prussianBlue} 
                  style={styles.icon} 
                />
                <Text style={styles.optionLabel}>{setting.label}</Text>
              </View>
              <Switch
                value={switchStates[setting.id]}
                onValueChange={() => toggleSwitch(setting.id)}
                thumbColor={switchStates[setting.id] ? COLORS.prussianBlue : COLORS.gray}
                trackColor={{ false: COLORS.gray, true: COLORS.ashGray }}
              />
            </View>
          ))}
        </View>

        {/* Logout Button */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => console.log('Logging Out')}
          activeOpacity={0.8}
        >
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ivory,
  },
  scrollContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.alabaster,
    marginBottom: 30,
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  title: {
    fontFamily: FONT.header,
    fontSize: 20,
    color: COLORS.prussianBlue,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  settingsContainer: {
    backgroundColor: COLORS.alabaster,
    borderRadius: 20,
    padding: 24,
    marginBottom: 30,
    shadowColor: COLORS.prussianBlue,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.ashGray,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 16,
  },
  optionLabel: {
    fontFamily: FONT.body,
    fontSize: 16,
    color: COLORS.prussianBlue,
    lineHeight: 22,
  },
  logoutButton: {
    backgroundColor: '#FF4136',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FF4136',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  logoutText: {
    fontFamily: FONT.bodyBold,
    fontSize: 18,
    color: COLORS.ivory,
    letterSpacing: 0.5,
  },
});

export default AccountSettingsScreen;