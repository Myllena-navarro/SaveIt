import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
// Importa só os estilos desta tela
import { styles_despesas } from '@/src/styles/styles_despesas';

// Tipagem das rotas que essa tela conhece
type RootStackParamList = {
  Home: undefined;
  CadastroDespesa: { tipo: 'fixa' | 'variavel' };
};

export default function Despesas() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles_despesas.container}>
      {/* Header: seta de voltar, logo SaveIt e ícones */}
      <View style={styles_despesas.header}>
        {/* Botão de voltar */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles_despesas.backButton}
          accessibilityLabel="Voltar"
          accessibilityRole="button"
        >
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>

        {/* Texto "SaveIt" */}
        <Text style={styles_despesas.title}>SaveIt</Text>

        {/* Ícones de sino e usuário */}
        <View style={styles_despesas.headerIcons}>
          <Feather name="bell" size={24} color="black" />
          <Feather
            name="user"
            size={24}
            color="black"
            style={{ marginLeft: 16 }}
          />
        </View>
      </View>

      {/* Onda verde no rodapé do header */}
      <Image
        source={require('@/assets/onda.png')}
        style={styles_despesas.headerWave}
        resizeMode="cover"
        accessibilityLabel="Onda decorativa"
      />

      {/* Área de opções */}
      <View style={styles_despesas.content}>
        {/* Botão FIXA */}
        <TouchableOpacity
          style={styles_despesas.optionButton}
          onPress={() =>
            navigation.navigate('CadastroDespesa', { tipo: 'fixa' })
          }
          accessibilityLabel="Cadastro de despesa fixa"
          accessibilityRole="button"
        >
          <Text style={styles_despesas.optionButtonText}>FIXA</Text>
        </TouchableOpacity>

        {/* Botão VARIÁVEL */}
        <TouchableOpacity
          style={styles_despesas.optionButton}
          onPress={() =>
            navigation.navigate('CadastroDespesa', { tipo: 'variavel' })
          }
          accessibilityLabel="Cadastro de despesa variável"
          accessibilityRole="button"
        >
          <Text style={styles_despesas.optionButtonText}>VARIÁVEL</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
