import React from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const { colors } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 24,
        }}
      >
        {/* Logo */}
        <Image
          source={require('../assets/logo-jogo.png')}
          style={{ width: 200, height: 200, marginBottom: 16 }}
          resizeMode="contain"
        />

        {/* Nome do jogo */}
        <Text
          variant="headlineLarge"
          style={{
            marginBottom: 48,
            color: colors.onSurface,
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Construa sua Mão
        </Text>

        {/* Botão Iniciar */}
        <Button
          mode="contained"
          // onPress={() => navigation.navigate('Game')}
          style={{
            marginBottom: 16,
            width: 200,
            height: 48,
            justifyContent: 'center',
          }}
          labelStyle={{ fontWeight: 'bold' }}
        >
          Iniciar Jogo
        </Button>

        {/* Botão Ver Regras */}
        <Button
          mode="outlined"
          onPress={() => navigation.navigate('Rules')}
          style={{
            width: 200,
            height: 48,
            borderColor: colors.primary,
            justifyContent: 'center',
          }}
          labelStyle={{ color: colors.primary, fontWeight: 'bold' }}
        >
          Ver Regras
        </Button>
        <Button
          mode="outlined"
          onPress={() => navigation.navigate('Results')}
          style={{
            width: 200,
            height: 48,
            borderColor: colors.primary,
            justifyContent: 'center',
          }}
          labelStyle={{ color: colors.primary, fontWeight: 'bold' }}
        >
          Resultados
        </Button>
      </View>
    </SafeAreaView>
  );
}
