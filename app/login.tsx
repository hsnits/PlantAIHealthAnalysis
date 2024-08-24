import React from 'react';
import { ImageBackground, StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function LoginScreen() {
  const router = useRouter();

  const handleLetsCarePress = () => {
    router.push('/LetsCareScreen'); 
  };
  const handleSignupPress = () => {
    router.push('/SignupScreen')
  };

  return (
    <ImageBackground
      source={require('@/assets/images/bg.webp')}
      style={styles.background}
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>Login</ThemedText>
        <ThemedText type="title" style={styles.subtitle}>Sign in to continue.</ThemedText>
        
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your username"
            placeholderTextColor="#999"
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

        <TouchableOpacity style={styles.button} onPress={handleLetsCarePress}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignupPress} >
        <ThemedText type="title" style={styles.subtitle}>Not have account? 
      
          SignUp

     
        </ThemedText>
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
    fontWeight: 'bold',
  },
});
