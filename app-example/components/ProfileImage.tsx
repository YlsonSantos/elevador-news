import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';

interface ProfileImageProps {
  url: string;
  onPress: () => void;
}

export function ProfileImage({ url, onPress }: ProfileImageProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: url }} style={styles.image} resizeMode="cover" />
      </View>
      <TouchableOpacity style={styles.badge} onPress={onPress} activeOpacity={0.7}>
        <Text style={styles.badgeText}>Alternar Foto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 40,
  },
  imageWrapper: {
    padding: 4,
    borderRadius: 100,
    backgroundColor: '#fff',
    elevation: 10, // Sombra Android
    shadowColor: '#6200ee', // Sombra iOS
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  badge: {
    marginTop: -20,
    backgroundColor: '#6200ee',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});