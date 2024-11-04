import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Switch,
  Button,
  TextInput,
  Pressable,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function ProfileScreen() {
  // State Variables
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [avatar, setAvatar] = useState<string | null>(null);  // Added type definition
  const [coverPhoto, setCoverPhoto] = useState<string | null>(null);  // Added type definition
  const [name, setName] = useState('Marisol A. Datahan');
  const [email, setEmail] = useState('datahan.marisol012@gmail.com');
  const [contactNumber, setContactNumber] = useState('+639352894109');
  const [isEditing, setIsEditing] = useState(false);

  // Toggle Dark Mode
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Image Picker Function
  const pickImage = async (type: 'avatar' | 'cover') => {  // Added type for 'type' parameter
    try {
      // Request media library permissions if not already granted
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Permission Denied', 'Sorry, we need camera roll permissions to make this work!');
          return;
        }
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log('Image Picker Result:', result);

      if (!result.canceled) {
        const selectedImage = result.assets[0].uri;
        if (type === 'avatar') {
          setAvatar(selectedImage);
        } else if (type === 'cover') {
          setCoverPhoto(selectedImage);
        }
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'An error occurred while selecting the image.');
    }
  };

  // Handle Edit Profile Toggle
  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  // Handle Save Profile
  const handleSaveProfile = () => {
    setIsEditing(false);
    Alert.alert('Profile Saved', 'Your profile has been updated successfully.');
  };

  return (
    
    <ScrollView
      style={[styles.container, isDarkMode && styles.darkContainer]}
      contentContainerStyle={{ alignItems: 'center' }}
    >
      {/* Cover Photo */}
      <View style={styles.coverPhotoContainer}>
        <Image
          source={
            coverPhoto
              ? { uri: coverPhoto }
              : require('@/assets/images/default-cover.jpg') // Updated path
          }
          style={styles.coverPhoto}
        />
        {isEditing && (
          <Pressable
            style={styles.uploadButtonCover}
            onPress={() => pickImage('cover')}
          >
            <MaterialIcons name="add" size={24} color="white" />
          </Pressable>
        )}
      </View>

      {/* Profile Image */}
      <View style={styles.profileImageContainer}>
        <Image
          source={
            avatar
              ? { uri: avatar }
              : require('@/assets/images/user-profile.jpg') // Updated path
          }
          style={styles.profileImage}
        />
        {isEditing && (
          <Pressable
            style={styles.uploadButtonAvatar}
            onPress={() => pickImage('avatar')}
          >
            <MaterialIcons name="add" size={20} color="white" />
          </Pressable>
        )}
      </View>

      {/* User Information */}
      <View style={styles.sectionContainer}>
        <Text style={[styles.sectionTitle, isDarkMode && styles.darkText]}>
          User Information
        </Text>
        {isEditing ? (
          <>
            <TextInput
              style={[styles.input, isDarkMode && styles.darkInput]}
              value={name}
              onChangeText={setName}
              placeholder="Name"
              placeholderTextColor={isDarkMode ? '#ccc' : '#888'}
            />
            <TextInput
              style={[styles.input, isDarkMode && styles.darkInput]}
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              placeholderTextColor={isDarkMode ? '#ccc' : '#888'}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={[styles.input, isDarkMode && styles.darkInput]}
              value={contactNumber}
              onChangeText={setContactNumber}
              placeholder="Contact Number"
              placeholderTextColor={isDarkMode ? '#ccc' : '#888'}
              keyboardType="phone-pad"
            />
            <Button
              title="Save"
              onPress={handleSaveProfile}
              color="#007bff"
            />
          </>
        ) : (
          <>
            <View
              style={[styles.infoBox, isDarkMode && styles.darkInfoBox]}
            >
              <MaterialIcons
                name="person"
                size={24}
                color={isDarkMode ? 'white' : 'black'}
              />
              <Text
                style={[styles.infoText, { color: isDarkMode ? 'white' : 'black' }]}
              >
                {name}
              </Text>
            </View>
            <View
              style={[styles.infoBox, isDarkMode && styles.darkInfoBox]}
            >
              <MaterialIcons
                name="email"
                size={24}
                color={isDarkMode ? 'white' : 'black'}
              />
              <Text
                style={[styles.infoText, { color: isDarkMode ? 'white' : 'black' }]}
              >
                {email}
              </Text>
            </View>
            <View
              style={[styles.infoBox, isDarkMode && styles.darkInfoBox]}
            >
              <MaterialIcons
                name="phone"
                size={24}
                color={isDarkMode ? 'white' : 'black'}
              />
              <Text
                style={[styles.infoText, { color: isDarkMode ? 'white' : 'black' }]}
              >
                {contactNumber}
              </Text>
            </View>
          </>
        )}
      </View>

      {/* Settings */}
      <View style={styles.sectionContainer}>
        <Text style={[styles.sectionTitle, isDarkMode && styles.darkText]}>
          Settings
        </Text>

        {/* Dark Mode Toggle */}
        <View style={[styles.settingItem, isDarkMode && styles.darkSettingItem]}>
          <MaterialIcons
            name={isDarkMode ? 'brightness-3' : 'brightness-3'} // Only showing moon icon in dark mode
            size={24}
            color={isDarkMode ? 'white' : 'black'}
          />
          <Text style={[styles.settingText, isDarkMode && styles.darkText]}>
            Dark Mode
          </Text>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
        </View>

        {/* Edit Profile */}
        <Pressable
          style={[styles.settingItem, isDarkMode && styles.darkSettingItem]}
          onPress={handleEditProfile}
        >
          <MaterialIcons
            name="edit"
            size={24}
            color={isDarkMode ? 'white' : 'black'}
          />
          <Text style={[styles.settingText, isDarkMode && styles.darkText]}>
            {isEditing ? 'Cancel Editing' : 'Edit Profile'}
          </Text>
        </Pressable>
      </View>

      {/* Sign Out Button */}
      <View style={styles.signOutContainer}>
        <Button
          title="Sign Out"
          onPress={() => console.log('Signing out...')}
          color="#d9534f"
        />
      </View>
    </ScrollView>
  );
}

// Stylesheet
const styles = StyleSheet.create({
  // Main Container
  container: {
    flex: 1,
    backgroundColor: '#E1EBEE',
  },
  darkContainer: {
    backgroundColor: '#333',
  },

  // Cover Photo
  coverPhotoContainer: {
    width: '100%',
    height: 200,
    position: 'relative',
  },
  coverPhoto: {
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  uploadButtonCover: {
    position: 'absolute',
    top: 30,
    right: 10,
    backgroundColor: '#007bff',
    padding: 3,
    borderRadius: 25, // Circular button
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2, // For Android shadow
  },

 
  // Profile Image
  profileImageContainer: {
    marginTop: -80, // Overlap with cover photo
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#FFFF', 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  uploadButtonAvatar: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#007bff',
    padding: 5,
    borderRadius: 15, // Circular button
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 2,
  },
  

  // Section Containers
  sectionContainer: {
    width: '90%',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  darkText: {
    color: '#fff',
  },

  // User Information
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    padding: 15,
    borderRadius: 15, // Rounded edges
    backgroundColor: '#fff', // White background
    borderColor: '#1F305E',
    borderWidth: 1,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Elevation for Android
    elevation: 3,
  },
  darkInfoBox: {
    backgroundColor: '#555', // Grey background in dark mode
    borderColor: '#777',
  },
  infoText: {
    marginLeft: 15,
    fontSize: 16,
  },

  // Inputs
  input: {
    height: 50,
    borderColor: '#1F305E',
    borderWidth: 1,
    marginVertical: 10,
    width: '100%',
    paddingHorizontal: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    color: '#000',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // Elevation for Android
    elevation: 1,
  },
  darkInput: {
    backgroundColor: '#555',
    color: '#fff',
    borderColor: '#777',
  },

  // Settings
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderColor: '#1F305E',
    borderWidth: 1,
    marginVertical: 5,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // Elevation for Android
    elevation: 2,
  },
  darkSettingItem: {
    backgroundColor: '#555',
    borderColor: '#777',
  },
  settingText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: '#000',
  },

  // Sign Out Button
  signOutContainer: {
    width: '90%',
    marginTop: 30,
    marginBottom: 30,
  },
});