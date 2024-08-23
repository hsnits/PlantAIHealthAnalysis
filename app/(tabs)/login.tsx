import React from 'react';
import { ImageBackground, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LoginScreen() {
  const router = useRouter();

  const handleLoginPress = () => {
    router.push('/(tabs)/'); 
  };

  return (
    <ImageBackground
      source={require('@/assets/images/bg.webp')}
      style={styles.background}
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>Login</ThemedText>
        <ThemedText type="title" style={styles.subtitle}>Sign in to continue.</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#999" // Adjusted placeholder color for better contrast
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Login</Text>
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
    paddingHorizontal: 32,
    paddingVertical: 64,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    borderRadius: 10,
    marginHorizontal: 16,
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
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
    padding: 12,
    marginBottom: 16,
    borderRadius: 10,
    color: '#333', 
  },
  button: {
    backgroundColor: '#4CAF4F00',
    color: '#ffff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 2,
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
