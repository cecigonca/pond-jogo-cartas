import React from 'react';
import { ScrollView, View, SafeAreaView } from 'react-native';
import { Text, useTheme, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function RulesScreen() {
  const { colors } = useTheme();
  const navigation = useNavigation();

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
          O objetivo é construir a melhor mão possível ao longo de 10 rodadas, escolhendo cartas estratégicas que gerem a maior pontuação final.
        </Text>

        <Text variant="titleMedium" style={{ marginBottom: 8, fontWeight: 'bold' }}>
          🕹️ Como Jogar
        </Text>
        <Text style={{ marginBottom: 16 }}>
          - Você terá 10 rodadas no total.{"\n"}
          - A cada rodada, três cartas são exibidas.{"\n"}
          - Você deve escolher apenas uma delas para adicionar à sua mão.{"\n"}
          - Algumas cartas possuem modificadores que afetam a pontuação.
        </Text>

        <Text variant="titleMedium" style={{ marginBottom: 8, fontWeight: 'bold' }}>
          ✨ Modificadores
        </Text>
        <Text style={{ marginBottom: 16 }}>
          Modificadores são efeitos especiais que aumentam sua pontuação.{"\n"}
          Exemplos:{"\n"}
          • 3 cartas da mesma cor = +5 pontos{"\n"}
          • 2 cartas com ícones especiais = x2 na pontuação{"\n"}
          • 4 cartas diferentes = +7 pontos
        </Text>

        <Text variant="titleMedium" style={{ marginBottom: 8, fontWeight: 'bold' }}>
          🧮 Pontuação
        </Text>
        <Text style={{ marginBottom: 16 }}>
          Cada carta possui um valor base (ex: 1 a 5 pontos).{"\n"}
          A pontuação final é a soma dos valores das cartas + bônus dos modificadores ativos.
        </Text>

        <Text variant="titleMedium" style={{ marginBottom: 8, fontWeight: 'bold' }}>
          🏁 Fim de Jogo
        </Text>
        <Text style={{ marginBottom: 32 }}>
          Ao final da 10ª rodada, sua mão é avaliada e sua pontuação final é exibida na tela de resultados.
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
