import React, { useEffect, useCallback, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';

import Splash from './src/screens/SplashScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ValidationScreen from './src/screens/ValidationScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import UserContactScreen from './src/screens/UserContactScreen';
import PoliciesScreen from './src/screens/PoliciesScreen';
import AboutUsScreen from './src/screens/AboutUsScreen';
import AccountSettingsScreen from './src/screens/AccountSettingsScreen';
import BreathingExerciseScreen from './src/screens/BreathingExerciseScreen';
import CalmingVisualsScreen from './src/screens/CalmingVisualsScreen';
import ChatBotScreen from './src/screens/ChatBotScreen';
import ChatBotStartScreen from './src/screens/ChatBotStartScreen';
import CommunityFundraiserScreen from './src/screens/CommunityFundraiserScreen';
import PositiveAffirmationScreen from './src/screens/PositiveAffirmationScreen';
import ForgotPassOTPScreen from './src/screens/ForgotPassOTPScreen';
import ForgotPassScreen from './src/screens/ForgotPassScreen'; 
import ChangePassSuccess from './src/screens/ChangePassSuccess';
import ResetPassScreen from './src/screens/ResetPassScreen';
import JournalLogScreen from './src/screens/JournalLogScreen';
import { loadFonts } from './src/utils/fonts';

const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts(loadFonts());
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    if (fontsLoaded) {
      setAppReady(true);
    }
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (appReady) {
      await SplashScreen.hideAsync();
    }
  }, [appReady]);

  if (!appReady) return null;

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Validation" component={ValidationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="UserContactScreen" component={UserContactScreen} />
        <Stack.Screen name="PoliciesScreen" component={PoliciesScreen} />
        <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
        <Stack.Screen name="AccountSettingsScreen" component={AccountSettingsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BreathingExerciseScreen" component={BreathingExerciseScreen} />
        <Stack.Screen name="CalmingVisualsScreen" component={CalmingVisualsScreen} />
        <Stack.Screen name="ChatBotScreen" component={ChatBotScreen} />
        <Stack.Screen name="ChatBotStart" component={ChatBotStartScreen} />
        <Stack.Screen name="CommunityFundraiserScreen" component={CommunityFundraiserScreen} />
        <Stack.Screen name="PositiveAffirmationScreen" component={PositiveAffirmationScreen} />
        <Stack.Screen name="ResetPassScreen" component={ResetPassScreen} />
        <Stack.Screen name="ForgotPassOTPScreen" component={ForgotPassOTPScreen} />
        <Stack.Screen name="ForgotPassScreen" component={ForgotPassScreen} />
        <Stack.Screen name="ChangePassSuccess" component={ChangePassSuccess} />
        <Stack.Screen name="JournalLogScreen" component={JournalLogScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
