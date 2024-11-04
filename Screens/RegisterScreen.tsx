import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RegisterScreenProps = {
  navigation: StackNavigationProp<any>;
  route: RouteProp<any, any>;
};

export default function RegisterScreen({ navigation }: RegisterScreenProps) {
  const [isRegistered, setIsRegistered] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    setIsRegistered(true);
    setTimeout(() => {
      navigation.navigate('Login');
    }, 1000);
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
       <Text style={styles.title}>Create an Account</Text>
        {isRegistered && (
          <Text style={styles.successMessage}>Registered successfully!</Text>
        )}

        <TextInput
          placeholder="First Name"
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          placeholder="Last Name"
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
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
  logo: {
    width: 150,
    height: 150,

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
  input: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  registerButton: {
    width: '100%',
    padding: 12,
    borderRadius: 25,
    backgroundColor: '#0047AB',
    alignItems: 'center',
    marginTop: 10,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  successMessage: {
    color: 'green',
    marginBottom: 12,
    fontSize: 16,
  },
});
