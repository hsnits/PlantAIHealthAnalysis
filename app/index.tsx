import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import SignupScreen from './SignupScreen';

export default function WelcomeScreen() {
  const router = useRouter();

  const handleLoginPress = () => {
    router.push('/login'); 
  };

  const handleSignupPress = () => {
    router.push('/SignupScreen');
  };

  return (
    <ImageBackground
      source={require('@/assets/images/bg.webp')}
      style={styles.background}
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>Welcome</ThemedText>
        <ThemedText type="title" style={styles.subtitle}>Let's Care for the Planet</ThemedText>
        
        <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/SignupScreen')}>
          <Text style={styles.buttonText}>Sign up</Text>
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
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    borderRadius: 10,
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 35,
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 24,
    textAlign: 'center',
    minHeight: 80,
    maxHeight: 150
  },
  button: {
    backgroundColor: '#4CAF4F00',
    color: '#ffff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ffff',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#ffff', 
    fontSize: 18,
    fontWeight: 'bold'
  },
});
