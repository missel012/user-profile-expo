import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type PasswordRecoveryScreenProps = {
  navigation: StackNavigationProp<any>;
  route: RouteProp<any, any>;
};

export default function PasswordRecoveryScreen({ navigation }: PasswordRecoveryScreenProps) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendRecoveryEmail = () => {
    setMessage('Recovery email sent successfully! Please check your inbox.');
  };

  return (
    <LinearGradient
      colors={['#A7C7E7', '#89CFF0']}
      style={styles.gradientContainer}
    >
   
      <View style={styles.container}>
      <Image
          source={require('../assets/images/logo.png')} 
          style={styles.logo}
        />
        <Text style={styles.title}>Password Recovery</Text>

        <TextInput
          placeholder="Enter your email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TouchableOpacity style={styles.recoveryButton} onPress={handleSendRecoveryEmail}>
          <Text style={styles.recoveryButtonText}>Send Recovery Email</Text>
        </TouchableOpacity>
        
        {message ? <Text style={styles.message}>{message}</Text> : null}

        <Text style={styles.backText} onPress={() => navigation.goBack()}>
          Back to Login
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
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#0047AB',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
  },
  input: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  recoveryButton: {
    width: '100%',
    padding: 12,
    borderRadius: 25,
    backgroundColor: '#0047AB',
    alignItems: 'center',
    marginTop: 10,
  },
  recoveryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    marginTop: 12,
    color: 'green',
    fontSize: 16,
  },
  backText: {
    marginTop: 12,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});
