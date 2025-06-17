import React, { useState, useEffect } from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import { Button, Text, useTheme, Card } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ResultScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { colors } = useTheme();

  const maoFinal = route.params?.maoFinal ?? [];
  const nomeJogador = route.params?.nomeJogador ?? 'Desconhecido';

  const [posicaoRanking, setPosicaoRanking] = useState<number | null>(null);

  // cálculo da pontuação
  let total = 0;
  let multiplicadores = 1;

  const corContagem: Record<string, number> = {};
  maoFinal.forEach((c) => {
    if (c.cor) {
      corContagem[c.cor] = (corContagem[c.cor] || 0) + 1;
    }
  });

  const temTrioCor = Object.values(corContagem).some((qtd) => qtd >= 3);

  const efeitosFormatados: string[] = [];

  for (const carta of maoFinal) {
    const efeito = carta.efeito;
    const valor = carta.valor;
    let linha = '';

    if (efeito === 'bonus_fixa') {
      total += valor;
      linha = `+${valor} ${carta.nome}`;
    } else if (efeito === 'bonus_negativo') {
      total += valor;
      linha = `${valor} ${carta.nome}`;
    } else if (efeito === 'multiplica_total') {
      multiplicadores *= 2;
      linha = `x2 ${carta.nome}`;
    } else if (efeito === 'bonus_trio_cor') {
      if (temTrioCor) {
        total += 3;
        linha = `+3 ${carta.nome} (aplicado)`;
      } else {
        linha = `0 ${carta.nome} (sem trio de cor)`;
      }
    } else {
      linha = `0 ${carta.nome}`;
    }

    efeitosFormatados.push(linha);
  }

  const pontuacaoFinal = total * multiplicadores;

  // cálculo da colocação
  useEffect(() => {
    const salvarPontuacao = async () => {
      const novoScore = {
        nome: nomeJogador,
        pontos: pontuacaoFinal,
        timestamp: Date.now(),
      };

      try {
        const dados = await AsyncStorage.getItem('ranking');
        const rankingAtual = dados ? JSON.parse(dados) : [];

        const rankingNovo = [...rankingAtual, novoScore]
          .sort((a, b) => b.pontos - a.pontos || a.timestamp - b.timestamp)
          .slice(0, 5);

        await AsyncStorage.setItem('ranking', JSON.stringify(rankingNovo));

        const posicao = rankingNovo.findIndex(
          (jogador) =>
            jogador.nome === novoScore.nome &&
            jogador.pontos === novoScore.pontos &&
            jogador.timestamp === novoScore.timestamp
        );

        if (posicao !== -1) setPosicaoRanking(posicao + 1);
      } catch (e) {
        console.error('Erro ao salvar pontuação', e);
      }
    };

    salvarPontuacao();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <ScrollView contentContainerStyle={{ padding: 24 }}>
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

        <Text
          variant="titleLarge"
          style={{
            textAlign: 'center',
            marginBottom: 8,
            color: colors.onSurface,
          }}
        >
          Sua pontuação: <Text style={{ fontWeight: 'bold' }}>{pontuacaoFinal}</Text>
        </Text>

        {posicaoRanking && (
          <Text
            variant="titleMedium"
            style={{
              textAlign: 'center',
              marginBottom: 24,
              color: colors.secondary,
            }}
          >
            Você está em {posicaoRanking}º lugar no ranking!
          </Text>
        )}

        <Text variant="titleMedium" style={{ fontWeight: 'bold', marginBottom: 16 }}>
          Cartas Escolhidas:
        </Text>

        {efeitosFormatados.map((linha, index) => (
          <Card
            key={index}
            style={{
              marginBottom: 12,
              backgroundColor: colors.surface,
              padding: 12,
              borderLeftWidth: 6,
              borderLeftColor: colors.secondary,
            }}
          >
            <Text style={{ fontSize: 14 }}>{linha}</Text>
          </Card>
        ))}

        <Button
          mode="contained"
          onPress={() => navigation.navigate('Home')}
          style={{
            marginTop: 32,
            alignSelf: 'center',
            width: 200,
            height: 48,
            justifyContent: 'center',
          }}
          labelStyle={{ fontWeight: 'bold' }}
        >
          Jogar Novamente
        </Button>

        <Button
          mode="outlined"
          onPress={() => navigation.navigate('Ranking')}
          style={{
            marginTop: 16,
            alignSelf: 'center',
            width: 200,
            height: 48,
            justifyContent: 'center',
            borderColor: colors.primary,
          }}
          labelStyle={{ fontWeight: 'bold', color: colors.primary }}
        >
          Ver Ranking
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}
