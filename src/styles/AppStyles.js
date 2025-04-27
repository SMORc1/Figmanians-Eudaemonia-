import { StyleSheet } from 'react-native';

export const COLORS = {
  ashGray: '#B4B8AB',
  prussianBlue: '#153243',
  indigoDye: '#284B63',
  ivory: '#F4F9E9',
  alabaster: '#EEF0EB',
};

export const FONT = {
  header: 'DelaGothicOne-Regular',
  body: 'CabinCondensed-Regular',
  bodyBold: 'CabinCondensed-Bold',
};

const AppStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.ivory,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80, // Home/Welcome/Login screens padding
  },

  logo: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  title: {
    fontFamily: FONT.header,
    fontSize: 26,
    color: COLORS.prussianBlue,
    textAlign: 'center',
    marginBottom: 20,
  },

  button: {
    backgroundColor: COLORS.indigoDye,
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 25,
    marginVertical: 8,
    width: '80%',
    alignItems: 'center',
  },

  buttonText: {
    color: COLORS.ivory,
    fontFamily: FONT.bodyBold,
    fontSize: 16,
  },

  input: {
    backgroundColor: COLORS.alabaster,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 8,
    width: '80%',
    fontFamily: FONT.body,
    fontSize: 14,
  },

  // ---------------------------
  // STYLES for SignUpScreen
  // ---------------------------
  signupContainer: {
    flexGrow: 1,
    backgroundColor: COLORS.ivory,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 90, // <<< was 120, now 90 to pull it slightly up
    paddingBottom: 20,
  },

  signupLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
    marginTop: 40, // <<< slight breathing under back arrow
  },

  signupHeader: {
    marginBottom: 10,
  },

  signupTitle: {
    fontFamily: FONT.header,
    fontSize: 24,
    color: COLORS.prussianBlue,
    textAlign: 'center',
  },

  signupForm: {
    width: '85%',
    alignItems: 'center',
  },

  signupInput: {
    backgroundColor: COLORS.alabaster,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginVertical: 6,
    width: '100%',
    fontFamily: FONT.body,
    fontSize: 14,
  },

  passwordContainer: {
    alignItems: 'center', 
    justifyContent: 'center', 
    marginVertical: 10,
    width: '100%',
  },
  
  passwordPoliciesTitle: {
    fontFamily: FONT.bodyBold,
    fontSize: 16,
    color: COLORS.prussianBlue,
    marginBottom: 4,
    textAlign: 'center', // make the title centered
    width: '100%', // <- ADD this so textAlign works!
  },
  
  passwordPolicies: {
    fontFamily: FONT.body,
    fontSize: 13,
    color: COLORS.prussianBlue,
    textAlign: 'center', // make each policy line centered
    width: '100%', // <- ADD this too
  },
  
  registerButton: {
    backgroundColor: COLORS.indigoDye,
    paddingVertical: 10,
    paddingHorizontal: 32,
    borderRadius: 25,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },

  registerButtonText: {
    color: COLORS.ivory,
    fontFamily: FONT.bodyBold,
    fontSize: 16,
  },
});

export default AppStyles;
