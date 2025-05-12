import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AppStyles, { COLORS, FONT } from '../styles/AppStyles';

const CommunityFundraiserScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* App Bar */}
      <View style={styles.appBar}>
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Feather name="chevron-left" size={28} color={COLORS.prussianBlue} />
        </TouchableOpacity>
        <Text style={styles.title}>Fundraiser</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView 
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.heading}>Support Mental Health for All 💙</Text>

        <View style={styles.textContainer}>
          <Text style={styles.paragraph}>
            Mental health care should be accessible to everyone. Many face financial
            barriers that prevent them from receiving the help they need. Our fundraising
            initiative is dedicated to supporting those who can't afford therapy, counseling,
            or essential mental health resources.
          </Text>

          <Text style={styles.paragraph}>
            Your contributions help by sponsoring therapy sessions, funding crisis helplines, or supporting
            emotional wellness programs. Every donation, no matter how small, brings hope and healing to
            someone in need.
          </Text>
        </View>

        <Text style={styles.boldText}>
          Join us in creating a compassionate community where no one faces their mental health journey alone.
        </Text>

        <Text style={styles.sectionTitle}>How Your Donation Helps:</Text>

        <View style={styles.listContainer}>
          {donationItems.map((item, index) => (
            <View key={index} style={styles.donationItem}>
              <Ionicons 
                name={item.icon} 
                size={24} 
                color={COLORS.indigoDye} 
                style={styles.icon}
              />
              <Text style={styles.donationText}>{item.title}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity 
          style={styles.donateButton}
          activeOpacity={0.8}
        >
          <Text style={styles.donateButtonText}>Donate Now</Text>
        </TouchableOpacity>

        <Text style={styles.thankYou}>
          Thank you for your generosity in supporting mental health initiatives. Together, we can make a lasting impact!
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const donationItems = [
  { icon: 'heart', title: 'Sponsor therapy sessions for individuals in need.' },
  { icon: 'call', title: 'Fund crisis helplines to provide 24/7 support.' },
  { icon: 'people', title: 'Support community workshops for emotional wellness.' },
  { icon: 'handshake', title: 'Enable peer support groups for connection and understanding.' },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ivory,
  },
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.alabaster,
  },
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  title: {
    color: COLORS.prussianBlue,
    fontSize: 20,
    fontFamily: FONT.header,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    alignItems: 'center',
  },
  heading: {
    color: COLORS.prussianBlue,
    fontSize: 28,
    fontFamily: FONT.header,
    textAlign: 'center',
    marginVertical: 24,
    lineHeight: 34,
    letterSpacing: 0.5,
  },
  textContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },
  paragraph: {
    color: COLORS.prussianBlue,
    fontSize: 16,
    fontFamily: FONT.body,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  boldText: {
    color: COLORS.prussianBlue,
    fontSize: 18,
    fontFamily: FONT.bodyBold,
    textAlign: 'center',
    marginVertical: 24,
    lineHeight: 26,
  },
  sectionTitle: {
    color: COLORS.prussianBlue,
    fontSize: 22,
    fontFamily: FONT.header,
    textAlign: 'center',
    marginVertical: 24,
    letterSpacing: 0.5,
  },
  listContainer: {
    width: '100%',
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  donationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
    paddingHorizontal: 16,
  },
  icon: {
    marginRight: 12,
  },
  donationText: {
    color: COLORS.prussianBlue,
    fontSize: 16,
    fontFamily: FONT.body,
    flex: 1,
  },
  donateButton: {
    backgroundColor: COLORS.indigoDye,
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginVertical: 24,
    shadowColor: COLORS.prussianBlue,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  donateButtonText: {
    color: COLORS.ivory,
    fontSize: 18,
    fontFamily: FONT.bodyBold,
    letterSpacing: 0.5,
  },
  thankYou: {
    color: COLORS.prussianBlue,
    fontSize: 16,
    fontFamily: FONT.body,
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 40,
    lineHeight: 24,
  },
});

export default CommunityFundraiserScreen;