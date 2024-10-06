import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileScreen from './ProfileScreen'; // Adjust the path if needed

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
