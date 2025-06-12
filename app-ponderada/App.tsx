import React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import RulesScreen from './screens/RulesScreen';
import GameScreen from './screens/GameScreen';
import ResultScreen from './screens/ResultScreen';
import RankingScreen from './screens/RankingScreen';

const Stack = createNativeStackNavigator();

// 🎨 Tema com laranja amarelado como primário e verde petróleo como secundário
const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F29C3B',       // Laranja amarelado
    onPrimary: '#FFFFFF',     // Texto sobre o botão laranja
    secondary: '#2F7C78',     // Verde petróleo
    background: '#F2F2F2',    // Fundo geral
    surface: '#FFFFFF',       // Cards, inputs
    onSurface: '#2F3A3D',     // Texto sobre superfícies
    text: '#2F3A3D',          // Texto padrão
    error: '#D32F2F',         // Erros
  },
};

export default function App() {
  return (
    <PaperProvider theme={customTheme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Rules" component={RulesScreen} />
          <Stack.Screen name="Game" component={GameScreen} />
          <Stack.Screen name="Results" component={ResultScreen} />
          <Stack.Screen name="Ranking" component={RankingScreen} />
          {/* Aqui você pode adicionar outras telas do jogo */}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
