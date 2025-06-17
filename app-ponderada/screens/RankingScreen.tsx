import React, { useState, useEffect } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Button, Text, useTheme, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RankingScreen() {
  const [ranking, setRanking] = useState<any[]>([]);
  const { colors } = useTheme();
  const navigation = useNavigation<any>();

  useEffect(() => {
    const carregarRanking = async () => {
      const dados = await AsyncStorage.getItem('ranking');
      if (dados) setRanking(JSON.parse(dados));
    };
    carregarRanking();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        <Text
          variant="headlineLarge"
          style={{ textAlign: 'center', marginBottom: 24, fontWeight: 'bold', color: colors.primary }}
        >
          Ranking Top 5
        </Text>

        {ranking.length === 0 && (
          <Text style={{ textAlign: 'center', color: colors.onSurface }}>
            Nenhuma pontuação registrada ainda.
          </Text>
        )}

        {ranking.map((item, index) => (
          <Card
            key={index}
            style={{
              marginBottom: 12,
              padding: 12,
              borderLeftWidth: 6,
              borderLeftColor: colors.secondary,
            }}
          >
            <Text>
              <Text style={{ fontWeight: 'bold' }}>{index + 1}. {item.nome}</Text> – {item.pontos} pontos
            </Text>
          </Card>
        ))}

        <Button
          mode="outlined"
          onPress={() => navigation.goBack()}
          style={{ marginTop: 24, alignSelf: 'center', width: 200 }}
          labelStyle={{ fontWeight: 'bold' }}
        >
          Voltar ao Início
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}