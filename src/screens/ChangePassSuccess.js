import React, { useRef, useEffect } from 'react';
import { View, Animated, ActivityIndicator, Text, Image } from 'react-native';
import AppStyles, { COLORS, FONT } from '../styles/AppStyles';

const ChangePassSuccess = ({ navigation }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1500,
            useNativeDriver: true,
        }).start(() => {
            setTimeout(() => {
                navigation.replace('Login');
            }, 2000);
        });
    }, []);

    return (
        <View style={AppStyles.container}>
            <Animated.Image
                source={require('../../assets/images/checkmark.png')}
                style={[AppStyles.logo, { 
                    opacity: fadeAnim, 
                    width: 150, 
                    height: 150 
                }]}
            />

            <Animated.Text style={{
                opacity: fadeAnim,
                fontFamily: FONT.header,
                fontSize: 32,
                color: COLORS.prussianBlue,
                marginBottom: 20,
                textAlign: 'center',
            }}>
                Success!
            </Animated.Text>

            <Animated.View style={{ opacity: fadeAnim }}>
                <Text style={[
                    AppStyles.description, 
                    { 
                        fontSize: 18, 
                        textAlign: 'center',
                        lineHeight: 24,
                        marginBottom: 4
                    }]
                }>
                    Your password has been successfully changed!
                </Text>
                <Text style={[
                    AppStyles.description, 
                    { 
                        fontSize: 18, 
                        textAlign: 'center',
                        lineHeight: 24,
                        marginTop: 0
                    }]
                }>
                    Returning to the Login screen.
                </Text>
            </Animated.View>

            <ActivityIndicator 
                size="large" 
                color={COLORS.indigoDye} 
                style={{ marginTop: 20 }} 
            />
        </View>
    );
};

export default ChangePassSuccess;