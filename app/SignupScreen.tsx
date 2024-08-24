import React from 'react';
import { ImageBackground, StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Install expo-linear-gradient
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function SignupScreen() {
  const router = useRouter();

  const handleSignupPress = () => {
    router.push('/'); 
  };

  return (
    <ImageBackground
      source={require('@/assets/images/width_168.webp')}
      style={styles.background}
    >
    
        <ThemedView style={styles.container}>
          <ThemedText type="title" style={styles.title}>Create New Account</ThemedText>
          <ThemedText type="title" style={styles.subtitle}>Already Registerd Login here</ThemedText>
          
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              placeholderTextColor="#999"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#999"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#999"
              secureTextEntry
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSignupPress}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </ThemedView>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    paddingHorizontal: 32,
    paddingVertical: 64,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent overlay
    borderRadius: 10,

  },
  title: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 24,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    color: '#fff',
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    padding: 12,
    borderRadius: 10,
    color: '#333', 
  },
  button: {
    backgroundColor: '#031603', // Signup button color
    padding: 15,
    borderRadius: 10,
    borderColor: '#fff',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});
