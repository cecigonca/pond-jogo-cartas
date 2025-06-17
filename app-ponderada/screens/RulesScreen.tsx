import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function RulesScreen() {
  const { colors } = useTheme();
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          padding: 24,
        }}
      >
        <Text
          variant="headlineMedium"
          style={{
            marginBottom: 16,
            color: colors.primary,
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Regras do Jogo
        </Text>

        <Text variant="titleMedium" style={{ marginBottom: 8, fontWeight: 'bold' }}>
          🎯 Objetivo
        </Text>
        <Text style={{ marginBottom: 16 }}>
          Construir a melhor mão possível em 10 rodadas, escolhendo cartas que maximizem sua pontuação final.
        </Text>

        <Text variant="titleMedium" style={{ marginBottom: 8, fontWeight: 'bold' }}>
          🕹️ Como Jogar
        </Text>
        <Text style={{ marginBottom: 16 }}>
          • O jogo tem 10 rodadas.{"\n"}
          • Em cada rodada, 3 cartas diferentes aparecem na tela.{"\n"}
          • Você deve virar e escolher apenas 1 carta por rodada.{"\n"}
          • As cartas escolhidas vão para a sua mão e afetam sua pontuação.
        </Text>

        <Text variant="titleMedium" style={{ marginBottom: 8, fontWeight: 'bold' }}>
          ✨ Tipos de Efeitos nas Cartas
        </Text>
        <Text style={{ marginBottom: 16 }}>
          As cartas podem ter efeitos diferentes que influenciam o jogo:
          {"\n\n"}• <Text style={{ fontWeight: 'bold' }}>Pontos positivos:</Text> somam direto à pontuação final.
          {"\n"}• <Text style={{ fontWeight: 'bold' }}>Pontos negativos:</Text> subtraem da pontuação.
          {"\n"}• <Text style={{ fontWeight: 'bold' }}>x2 total:</Text> dobra o total ao final.
          {"\n"}• <Text style={{ fontWeight: 'bold' }}>Bônus por trio de cor:</Text> se você tiver 3 ou mais cartas da mesma cor, recebe +3 pontos extras.
        </Text>

        <Text variant="titleMedium" style={{ marginBottom: 8, fontWeight: 'bold' }}>
          🧮 Cálculo da Pontuação
        </Text>
        <Text style={{ marginBottom: 16 }}>
          A pontuação é calculada somando:
          {"\n"}• Os pontos das cartas escolhidas (positivos ou negativos).
          {"\n"}• Os bônus por efeitos ativos (ex: trio de cor).{"\n"}
          • Multiplicadores aplicados no final (ex: x2).
        </Text>

        <Text variant="titleMedium" style={{ marginBottom: 8, fontWeight: 'bold' }}>
          🏁 Fim de Jogo e Ranking
        </Text>
        <Text style={{ marginBottom: 32 }}>
          Após a 10ª rodada, sua pontuação final será exibida.{"\n"}
          Se estiver entre os 5 melhores, você entra no ranking com seu nome e posição.{"\n"}
          Você pode visualizar o ranking a qualquer momento na tela inicial.
        </Text>

        <Button
          mode="contained"
          onPress={() => navigation.goBack()}
          style={{ alignSelf: 'center', marginTop: 16, width: 200 }}
        >
          Voltar para o Início
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}
