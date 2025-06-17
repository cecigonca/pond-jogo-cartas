import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function RulesScreen() {
  const { colors } = useTheme();
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, padding: 24 }}>
        <Text
          variant="headlineMedium"
          style={{
            marginBottom: 16,
            color: colors.primary,
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Como Funciona o Jogo
        </Text>

        {/* OBJETIVO */}
        <Text style={{ marginBottom: 16 }}>
        Seu objetivo é montar a melhor mão possível em 10 rodadas, escolhendo cartas com efeitos que aumentem sua pontuação.
        </Text>

        {/* COMO JOGAR */}
        <Text style={{ marginBottom: 8, fontWeight: 'bold' }}>🕹️ Regras rápidas:</Text>
        <Text style={{ marginBottom: 16 }}>
          • São 10 rodadas.{"\n"}
          • Em cada uma, aparecem 3 cartas.{"\n"}
          • Toque para virar uma carta.{"\n"}
          • A carta escolhida vai para sua mão.{"\n"}
          • No fim, sua pontuação será calculada.{"\n"}
        </Text>

        {/* EFEITOS */}
        <Text style={{ marginBottom: 8, fontWeight: 'bold' }}>✨ Efeitos das Cartas:</Text>
        <Text style={{ marginBottom: 16 }}>
          • <Text style={{ fontWeight: 'bold' }}>Cartas Cor:</Text> +1 ponto no total{"\n"}
          • <Text style={{ fontWeight: 'bold' }}>Carta Sorte:</Text> +2 pontos no total{"\n"}
          • <Text style={{ fontWeight: 'bold' }}>Carta Azar:</Text> -2 pontos no total{"\n"}
          • <Text style={{ fontWeight: 'bold' }}>Carta Nula:</Text> não mexe na pontuação{"\n"}
          • <Text style={{ fontWeight: 'bold' }}>Carta Especial:</Text> dobra a pontuação final{"\n"}
          • <Text style={{ fontWeight: 'bold' }}>Trio de cor:</Text> se tiver 3 cartas da mesma cor, ganha +3 pontos no total{"\n"}
          </Text>

        {/* RANKING */}
        <Text style={{ marginBottom: 8, fontWeight: 'bold' }}>🏆 Ranking:</Text>
        <Text style={{ marginBottom: 32 }}>
          Se ficar entre os 5 melhores, seu nome entra no ranking. Você pode ver o ranking atual na tela inicial.
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
