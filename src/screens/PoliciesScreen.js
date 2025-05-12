import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import AppStyles, { COLORS, FONT } from '../styles/AppStyles';

const PoliciesScreen = () => {
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
        <Text style={styles.title}>Policies</Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView 
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* Logo and Title */}
        <View style={styles.headerContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.heading}>EUDAEMONIA</Text>
        </View>

        <View style={styles.divider} />

        {/* Policies List */}
        <View style={styles.policiesContainer}>
          {policies.map((policy, index) => (
            <View key={index} style={styles.policySection}>
              <Text style={styles.policyTitle}>{policy.title}</Text>
              <Text style={styles.policyContent}>{policy.content}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.footerText}>
          Thank you for trusting Eudaemonia. Your well-being is our highest priority.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const policies = [
  { title: '1. Privacy Policy', content: 'We prioritize your privacy. Eudaemonia collects data (speech, text, facial expressions) only with your consent, using it solely to enhance your experience.' },
  { title: '2. Data Usage', content: 'Your data is used for personalized support and is not shared with third parties without permission, except as required by law.' },
  { title: '3. User Consent', content: 'Clear consent is required for data collection, which you can revoke anytime through app settings.' },
  { title: '4. Support and Feedback', content: 'We welcome user feedback to continuously improve. Please contact support for questions or suggestions.' },
  { title: '5. Terms of Service', content: 'By using Eudaemonia, you agree to our terms. Updates may occur periodically with user notifications.' },
  { title: '6. Accessibility', content: 'We aim to make Eudaemonia inclusive and accessible. Contact us if you encounter accessibility barriers.' },
  { title: '7. Disclaimer', content: 'Eudaemonia is supportive but not a replacement for licensed mental health services. Seek professional help if needed.' },
  { title: '8. Security Measures', content: 'Your data is protected with encryption and strict access controls. Regular audits are conducted.' },
  { title: '9. Community Standards', content: 'We foster a safe environment. Abusive behavior may lead to account suspension or removal.' },
  { title: '10. Data Retention', content: 'Your data is kept only as long as necessary, unless a longer retention is required by law.' },
  { title: '11. Third-Party Integrations', content: 'We may link to third-party services. Review their privacy policies separately.' },
  { title: '12. User Responsibilities', content: 'You are responsible for keeping your account information secure.' },
  { title: '13. Age Restrictions', content: 'Users must be 13+ years old or have parental consent.' },
  { title: '14. Modifications to the App', content: 'We reserve the right to modify, suspend, or discontinue the app at any time.' },
  { title: '15. Contact Information', content: 'Email: support@eudaemoniaapp.com' },
];

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
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  heading: {
    color: COLORS.prussianBlue,
    fontSize: 28,
    fontFamily: FONT.header,
    textAlign: 'center',
    letterSpacing: 1,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.alabaster,
    marginVertical: 24,
    width: '80%',
    alignSelf: 'center',
  },
  policiesContainer: {
    marginBottom: 20,
  },
  policySection: {
    marginBottom: 24,
    backgroundColor: COLORS.alabaster,
    borderRadius: 12,
    padding: 16,
  },
  policyTitle: {
    fontSize: 18,
    fontFamily: FONT.bodyBold,
    color: COLORS.prussianBlue,
    marginBottom: 8,
  },
  policyContent: {
    fontSize: 16,
    fontFamily: FONT.body,
    color: COLORS.prussianBlue,
    lineHeight: 24,
  },
  footerText: {
    fontSize: 16,
    fontFamily: FONT.bodyBold,
    color: COLORS.prussianBlue,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
    lineHeight: 24,
  },
});

export default PoliciesScreen;