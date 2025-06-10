import React from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Text, Button, useTheme, Card, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function ResultScreen() {
  const navigation = useNavigation<any>();
  const { colors } = useTheme();

  // 🔢 Exemplo estático por enquanto
  const pontuacaoFinal = 41;
  const cartasEscolhidas = [
    { id: 1, nome: 'Par Vermelho', valor: 4, efeito: 'bonus_pares' },
    { id: 2, nome: 'Multiplicador', valor: 2, efeito: 'multi_final' },
    { id: 3, nome: 'Carta Verde', valor: 3, efeito: 'bonus_cor' },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentContainerStyle={{ padding: 24 }}>
        {/* Título */}
        <Text
          variant="headlineLarge"
          style={{
            textAlign: 'center',
            marginBottom: 16,
            color: colors.primary,
            fontWeight: 'bold',
          }}
        >
        Resultado Final
        </Text>

        {/* Pontuação */}
        <Text
          variant="titleLarge"
          style={{
            textAlign: 'center',
            marginBottom: 32,
            color: colors.onSurface,
          }}
        >
          Sua pontuação: <Text style={{ fontWeight: 'bold' }}>{pontuacaoFinal}</Text>
        </Text>

        {/* Cartas escolhidas */}
        <Text variant="titleMedium" style={{ marginBottom: 16, fontWeight: 'bold' }}>
          🃏 Cartas Escolhidas
        </Text>
        {cartasEscolhidas.map((carta) => (
          <Card
            key={carta.id}
            style={{
              marginBottom: 12,
              backgroundColor: colors.surface,
              borderLeftWidth: 6,
              borderLeftColor: colors.secondary,
            }}
          >
            <Card.Content>
              <Text variant="bodyLarge" style={{ fontWeight: 'bold' }}>
                {carta.nome}
              </Text>
              <Text variant="bodySmall">
                Valor base: {carta.valor} | Efeito: {carta.efeito}
              </Text>
            </Card.Content>
          </Card>
        ))}

        <Divider style={{ marginVertical: 24 }} />

        {/* Jogar novamente */}
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Home')}
          style={{ alignSelf: 'center', marginBottom: 16, width: 200, height: 48, justifyContent: 'center', }}
          labelStyle={{ fontWeight: 'bold' }}
        >
          Jogar Novamente
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}