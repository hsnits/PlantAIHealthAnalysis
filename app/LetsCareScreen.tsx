import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function LetsCareScreen() {
  const router = useRouter();
  const ResultScreen = () => {
    router.push('/ResultScreen'); 
  };


  return (
    <ImageBackground
      source={require('@/assets/images/width_360.webp')} // Replace with your image
      style={styles.background}
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>Let's Care</ThemedText>

        <View style={styles.iconsContainer}>
        <TouchableOpacity  onPress={ResultScreen}>
          <Image
            source={require('@/assets/images/Untitled-11.png')} 
            style={styles.icon1}
          />
      </TouchableOpacity>
          <Image
            source={require('@/assets/images/Untitled-1.png')} // Replace with your second icon URL
            style={styles.icon2}
          />
        </View>
      </ThemedView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 22,
    paddingVertical: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    borderRadius: 10,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 80, 
    textAlign: 'center',
  },
  iconsContainer: {
    alignItems: 'center',
  },
  icon1: {
    width: 140, 
    height: 120,
    marginBottom: 50, 
  },
  icon2: {
    width: 130, 
    height: 120,
    marginBottom: 20, 
  },
});
