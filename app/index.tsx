import React, { useState } from 'react';
import { ScrollView, StyleSheet, SafeAreaView, StatusBar, View, Text } from 'react-native';
import { Header } from '../app-example/components/Header';
import { NewsCard } from '../app-example/components/NewsCard';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const noticias = [
    { id: 1, cat: "SOCIAL", t: "Wine & Cheese Night", d: "Venha degustar os melhores vinhos no Lounge Gourmet hoje às 20h." },
    { id: 2, cat: "INFRA", t: "Academia 24h", d: "Novos equipamentos de alta performance foram instalados no 3º andar." },
    { id: 3, cat: "AVISO", t: "Limpeza de Fachada", d: "Início dos trabalhos no Bloco A. Mantenha as janelas fechadas." },
  ];

  return (
    <SafeAreaView style={[styles.container, isDarkMode ? styles.bgDark : styles.bgLight]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      
      <Header isDark={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} />

      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <View style={styles.welcomeContainer}>
          <Text style={[styles.status, isDarkMode ? styles.textGray : styles.textLightGray]}>
            ● Elevadores operando normalmente
          </Text>
        </View>

        {noticias.map((n) => (
          <NewsCard 
            key={n.id} 
            title={n.t} 
            description={n.d} 
            category={n.cat} 
            isDark={isDarkMode} 
          />
        ))}

        <Text style={[styles.otaText, isDarkMode ? styles.textGray : styles.textLightGray]}>
          SYNC: v1.0.4 | ENCRYPTED OTA 🟢
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  bgLight: { backgroundColor: '#F8FAFC' },
  bgDark: { backgroundColor: '#0F172A' },
  scroll: { padding: 25 },
  welcomeContainer: { marginBottom: 25 },
  status: { fontSize: 13, fontWeight: '600', color: '#10B981' },
  textGray: { color: '#94A3B8' },
  textLightGray: { color: '#64748B' },
  otaText: { textAlign: 'center', fontSize: 10, letterSpacing: 1, marginTop: 20, marginBottom: 50, fontWeight: '700' }
});