import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import AppStyles, { COLORS, FONT } from '../styles/AppStyles';

const AboutUsScreen = () => {
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
        <Text style={styles.title}>About Us</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView 
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo */}
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        {/* Heading */}
        <Text style={styles.heading}>EUDAEMONIA</Text>

        {/* Description */}
        <View style={styles.textContainer}>
          <Text style={styles.paragraph}>
            Eudaemonia is your AI-driven mental wellness companion, designed to empower you with personalized coping strategies, mood tracking, and stress management tools. By understanding your unique emotional patterns, Eudaemonia offers targeted support to enhance your well-being.
          </Text>

          <Text style={styles.paragraph}>
            Using advanced AI technologies, we analyze speech and text to provide tailored recommendations that promote emotional balance and resilience.
          </Text>
        </View>

        {/* Subheading */}
        <Text style={styles.subheading}>Your well-being, reimagined.</Text>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Mission Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Our Mission</Text>
          <Text style={styles.paragraph}>
            We aim to revolutionize mental wellness by providing a comprehensive, easy-to-use platform that supports individuals in their journey to emotional well-being.
          </Text>
        </View>

        <View style={styles.divider} />

        {/* Contact Us Section */}
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Contact Us</Text>
          <Text style={[styles.paragraph, styles.contactInfo]}>Email: support@eudaemonia.com</Text>
          <Text style={[styles.paragraph, styles.contactInfo]}>Phone: +63 919905335</Text>
        </View>

        <View style={styles.divider} />

        {/* Thank You */}
        <Text style={styles.thankYou}>Thank you for choosing Eudaemonia.</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ivory,
  },
  appBar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  imageContainer: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: COLORS.ivory,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    shadowColor: COLORS.prussianBlue,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: '70%',
    height: '70%',
  },
  heading: {
    color: COLORS.prussianBlue,
    fontSize: 35,
    fontFamily: FONT.header,
    textAlign: 'center',
    marginBottom: 24,
    letterSpacing: 1,
    lineHeight: 44,
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
  subheading: {
    color: COLORS.prussianBlue,
    fontSize: 20,
    fontFamily: FONT.bodyBold,
    textAlign: 'center',
    marginVertical: 30,
    letterSpacing: 0.5,
  },
  divider: {
    height: 1,
    width: '70%',
    backgroundColor: COLORS.ashGray,
    marginVertical: 30,
  },
  sectionContainer: {
    width: '100%',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  sectionTitle: {
    color: COLORS.prussianBlue,
    fontSize: 22,
    fontFamily: FONT.header,
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  contactInfo: {
    marginBottom: 8,
  },
  thankYou: {
    color: COLORS.prussianBlue,
    fontSize: 18,
    fontFamily: FONT.bodyBold,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
});

export default AboutUsScreen;