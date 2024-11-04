import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Make sure to install 'expo-linear-gradient'
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type LoginScreenProps = {
  navigation: StackNavigationProp<any>;
  route: RouteProp<any, any>;
};

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [emailAddress, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Profile');
  };

  const handleForgotPassword = () => {
    navigation.navigate('PasswordRecovery');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <LinearGradient
      colors={['#A7C7E7', '#89CFF0']} // Gradient colors, adjust as needed
      style={styles.gradientContainer}
    >
      
      <View style={styles.container}>
      <Image
          source={require('../assets/images/logo.png')} // Adjust path if necessary
          style={styles.logo}
        />
       
        <Text style={styles.welcomeText}>Welcome!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email Address"
            style={styles.input}
            value={emailAddress}
            onChangeText={setEmail}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Password"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.forgotPassword} onPress={handleForgotPassword}>
          Forgot your password?
        </Text>

        <Text style={styles.registerLink} onPress={handleRegister}>
          Don't have an account yet? Register here
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradientContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff', // White container for contrast
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  logo: {
    width: 150,
    height: 150,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0047AB',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  loginButton: {
    width: '100%',
    padding: 12,
    borderRadius: 25,
    backgroundColor: '#0047AB',
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#0047AB',
    textDecorationLine: 'underline',
  },
  registerLink: {
    color: '#0047AB',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
});
