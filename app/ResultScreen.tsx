import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';

export default function ResultScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('@/assets/images/width_350.png')} // Replace with your image
      style={styles.background}
    >
      <ThemedView style={styles.container}>
        <ThemedText type="title" style={styles.title}>Image</ThemedText>

        <Image
          source={require('@/assets/images/width_259.png')} // Replace with your circular image URL
          style={styles.circularImage}
        />

        <ThemedText type="title" style={styles.subtitle}>Disease & Solution</ThemedText>

        <ScrollView contentContainerStyle={styles.contentBox}>
          <Text style={styles.richText}>
            {/* Replace this with rich text content */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. 
            Cras venenatis euismod malesuada. Duis et turpis orci. Aliquam erat volutpat. 
            Nunc sed facilisis quam. Suspendisse potenti.
          </Text>
        </ScrollView>
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
    paddingHorizontal: 32,
    paddingVertical: 64,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent overlay
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 20, // Spacing between title and circular image
    textAlign: 'center',
  },
  circularImage: {
    width: 150, // Adjust size as needed
    height: 150, // Adjust size as needed
    borderRadius: 120, // Half of width/height for circular effect
    marginBottom: 50, // Spacing between image and subtitle
  },
  subtitle: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20, // Spacing between subtitle and content box
    textAlign: 'center',
  },
  contentBox: {
    width: '100%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
  },
  richText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
});
