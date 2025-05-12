import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Feather, FontAwesome5, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AppStyles, { COLORS } from '../styles/AppStyles';

const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [journalText, setJournalText] = useState('');
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Pop-up Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>It looks like you're going through a really tough time.</Text>
            <Text style={styles.modalSubtitle}>You're not alone, and support is available.</Text>
            <Text style={styles.modalQuestion}>Would you like to enable face analysis to help track your emotions?</Text>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../../assets/images/Profile.jpg')} style={styles.profileImage} />
        </TouchableOpacity>
        <Ionicons name="notifications-outline" size={28} color={COLORS.prussianBlue} />
      </View>

      {/* Greeting */}
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>Hi, Jeongyeon!</Text>
        <Text style={styles.subGreetingText}>How are you feeling today?</Text>
      </View>

      {/* Journal Box */}
      <View style={styles.journalBox}>
        <TextInput
          placeholder="Write something..."
          placeholderTextColor="#888"
          style={styles.journalInput}
          multiline
          value={journalText}
          onChangeText={setJournalText}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => {
            if (journalText.trim().length > 0) {
              setModalVisible(true);
              setJournalText('');
            }
          }}
        >
          <Feather name="send" size={22} color={COLORS.prussianBlue} />
        </TouchableOpacity>
      </View>

      {/* Daily Streak */}
      <Text style={styles.streakText}>Daily Streak: 100 days 💙</Text>

      {/* Features */}
      <View style={styles.featuresRow}>
        <TouchableOpacity 
    style={styles.featureButton}
    onPress={() => navigation.navigate('BreathingExerciseScreen')}
  >
    <MaterialCommunityIcons name="lungs" size={30} color={COLORS.prussianBlue} />
    <Text style={styles.featureText}>Breathing{'\n'}Exercise</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureButton}>
          <Ionicons name="heart-outline" size={30} color={COLORS.prussianBlue} />
          <Text style={styles.featureText}>Positive{'\n'}Affirmations</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureButton}>
          <Ionicons name="leaf-outline" size={30} color={COLORS.prussianBlue} />
          <Text style={styles.featureText}>Calming{'\n'}Visuals</Text>
        </TouchableOpacity>
      </View>

      {/* Community Fundraising */}
      <TouchableOpacity style={styles.communityButton}>
        <Text style={styles.communityButtonText}>Community Fundraising</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavContainer}>
        <View style={styles.bottomNav}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Entypo name="home" size={30} color={COLORS.ivory} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('UserContactScreen')}>
            <Ionicons name="person" size={30} color={COLORS.ivory} />
          </TouchableOpacity>
        </View>

        {/* Center Logo Button */}
        <View style={styles.centerLogoContainer}>
          <Image source={require('../../assets/images/logo.png')} style={styles.logoImage} />
        </View>

        {/* Drag Indicator */}
        <View style={styles.dragIndicator} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ivory,
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    borderWidth: 2,
    borderColor: COLORS.prussianBlue,
  },
  greetingContainer: {
    width: '100%',
    marginBottom: 10,
  },
  greetingText: {
    fontFamily: AppStyles.title?.fontFamily ?? 'CabinCondensed-Bold',
    fontSize: 26,
    fontWeight: 'bold',
    color: COLORS.prussianBlue,
  },
  subGreetingText: {
    fontFamily: AppStyles.body?.fontFamily ?? 'CabinCondensed-Regular',
    fontSize: 14,
    color: COLORS.prussianBlue,
    marginTop: 2,
  },
  journalBox: {
    backgroundColor: COLORS.alabaster,
    width: '100%',
    minHeight: 160,
    borderRadius: 16,
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    position: 'relative',
    borderWidth: 2,
    borderColor: COLORS.prussianBlue,
  },
  journalInput: {
    fontFamily: AppStyles.body?.fontFamily ?? 'CabinCondensed-Regular',
    fontSize: 16,
    flex: 1,
    textAlignVertical: 'top',
    color: COLORS.prussianBlue,
  },
  sendButton: {
    position: 'absolute',
    right: 15,
    bottom: 15,
  },
  streakText: {
    fontFamily: AppStyles.bodyBold?.fontFamily ?? 'CabinCondensed-Bold',
    fontSize: 16,
    color: COLORS.prussianBlue,
    marginVertical: 10,
  },
  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  featureButton: {
    backgroundColor: COLORS.alabaster,
    width: 100,
    height: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  featureText: {
    fontFamily: AppStyles.body?.fontFamily ?? 'CabinCondensed-Regular',
    fontSize: 13,
    color: COLORS.prussianBlue,
    textAlign: 'center',
    marginTop: 5,
  },
  communityButton: {
    backgroundColor: COLORS.ashGray,
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 40,
    marginBottom: 50,
    width: '100%',
    alignItems: 'center',
  },
  communityButtonText: {
    fontFamily: AppStyles.bodyBold?.fontFamily ?? 'CabinCondensed-Bold',
    fontSize: 16,
    color: COLORS.prussianBlue,
  },
  bottomNavContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
  bottomNav: {
    backgroundColor: COLORS.indigoDye,
    marginVertical: -15,
    width: '120%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 75,
  },
  centerLogoContainer: {
    position: 'absolute',
    top: -40,
    backgroundColor: COLORS.ivory,
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: COLORS.prussianBlue,
  },
  logoImage: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  dragIndicator: {
    width: 100,
    height: 5,
    backgroundColor: COLORS.ivory,
    borderRadius: 3,
    marginTop: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: COLORS.ivory,
    borderRadius: 20,
    padding: 25,
    width: '80%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.prussianBlue,
  },
  modalTitle: {
    fontFamily: AppStyles.bodyBold?.fontFamily ?? 'CabinCondensed-Bold',
    fontSize: 16,
    color: COLORS.prussianBlue,
    textAlign: 'center',
    marginBottom: 8,
  },
  modalSubtitle: {
    fontFamily: AppStyles.body?.fontFamily ?? 'CabinCondensed-Regular',
    fontSize: 14,
    color: COLORS.prussianBlue,
    textAlign: 'center',
    marginBottom: 12,
  },
  modalQuestion: {
    fontFamily: AppStyles.bodyBold?.fontFamily ?? 'CabinCondensed-Bold',
    fontSize: 16,
    color: COLORS.prussianBlue,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  modalButton: {
    backgroundColor: COLORS.prussianBlue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  modalButtonText: {
    color: COLORS.ivory,
    fontSize: 16,
    fontFamily: AppStyles.bodyBold?.fontFamily ?? 'CabinCondensed-Bold',
  },
});