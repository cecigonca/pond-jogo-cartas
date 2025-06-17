import React, { useState, useEffect } from 'react';
import { View, Image, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import cartasData from '../data/cartas.json'; // cartas

const screenWidth = Dimensions.get('window').width;

export default function GameScreen() {
  const [rodadaAtual, setRodadaAtual] = useState(1);
  const [maoJogador, setMaoJogador] = useState<any[]>([]);
  const [cartasRodada, setCartasRodada] = useState<any[]>([]);
  const [reveladas, setReveladas] = useState<boolean[]>([false, false, false]);
  const [especialEscolhida, setEspecialEscolhida] = useState(false);

  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { colors } = useTheme();

  const nomeJogador = route.params?.nomeJogador ?? 'Desconhecido';

  const sortearCartas = () => {
    const embaralhado = [...cartasData].sort(() => Math.random() - 0.5);

    const cartasPossiveis = especialEscolhida
      ? embaralhado.filter((carta) => carta.efeito !== 'multiplica_total')
      : embaralhado;

    setCartasRodada(cartasPossiveis.slice(0, 3));
    setReveladas([false, false, false]);
  };

  useEffect(() => {
    sortearCartas();
  }, [rodadaAtual]);

  const virarCarta = (index: number) => {
    const novas = [...reveladas];
    novas[index] = true;
    setReveladas(novas);

    setTimeout(() => {
      escolherCarta(index);
    }, 1000);
  };

  const escolherCarta = (index: number) => {
    const cartaEscolhida = cartasRodada[index];
    setMaoJogador([...maoJogador, cartaEscolhida]);

    if (cartaEscolhida.efeito === 'multiplica_total') {
      setEspecialEscolhida(true);
    }

    if (rodadaAtual === 10) {
      navigation.navigate('Results', {
        maoFinal: [...maoJogador, cartaEscolhida],
        nomeJogador,
      });
    } else {
      setRodadaAtual((prev) => prev + 1);
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text variant="headlineMedium" style={styles.titulo}>
        Rodada {rodadaAtual} de 10
      </Text>

      <View style={styles.cartasMesa}>
        {cartasRodada.map((carta, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => (!reveladas[idx] ? virarCarta(idx) : null)}
            activeOpacity={0.9}
          >
            <View style={styles.carta}>
              {reveladas[idx] ? (
                <View style={styles.cartaFrente}>
                  <Text style={styles.valor}>{carta.nome}</Text>
                  <Text style={styles.descricao}>{carta.descricao}</Text>
                </View>
              ) : (
                <Image
                  source={require('../assets/carta.png')}
                  style={styles.costa}
                />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.maoWrapper}>
        {maoJogador.map((carta, idx) => (
          <View key={idx} style={styles.cartaMini}>
            <Text style={styles.valorMini}>{carta.nome}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 80,
    justifyContent: 'flex-start',
  },
  titulo: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 24,
  },
  cartasMesa: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 48,
  },
  carta: {
    width: 110,
    height: 160,
    borderRadius: 20,
    backgroundColor: '#FFFDF7',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 6,
    elevation: 4,
    padding: 10,
  },
  cartaFrente: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  costa: {
    width: 104,
    height: 154,
    resizeMode: 'cover',
    borderRadius: 18,
  },
  valor: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 8,
  },
  descricao: {
    fontSize: 12,
    textAlign: 'center',
  },
  maoWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
    position: 'absolute',
    bottom: 32,
    left: 0,
    right: 0,
    paddingHorizontal: 16,
  },
  cartaMini: {
    backgroundColor: '#FFFDF7',
    borderRadius: 12,
    padding: 6,
    width: 72,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 4,
    elevation: 2,
  },
  valorMini: {
    fontSize: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
