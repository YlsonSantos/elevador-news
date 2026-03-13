import React, { useState } from 'react';
import { View, StyleSheet, Alert, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import { ProfileImage } from '../app-example/components/ProfileImage';
import { ProfileForm } from '../app-example/components/ProfileForm';

export default function App() {
  const [nome, setNome] = useState('');
  const [currentImage, setCurrentImage] = useState('https://github.com/ylsonsantos.png');

  const alternarFoto = () => {
    const foto1 = 'https://github.com/ylsonsantos.png';
    const foto2 = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80';
    setCurrentImage(currentImage === foto1 ? foto2 : foto1);
  };

  const handleSave = () => {
    if(!nome) return Alert.alert("Ops!", "Digite um nome antes de salvar.");
    Alert.alert("Sucesso!", `Perfil de ${nome} atualizado!`);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <StatusBar barStyle="dark-content" />
      <View style={styles.card}>
        <ProfileImage url={currentImage} onPress={alternarFoto} />
        <ProfileForm nome={nome} setNome={setNome} onSave={handleSave} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc', // Fundo gelo moderno
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
  },
});