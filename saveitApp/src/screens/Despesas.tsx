import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { styles_despesas } from '@/src/styles/styles_despesas';

type RootStackParamList = {
  Home: undefined;
  CadastroDespesa: { tipo: 'fixa' | 'variavel' };
};

export default function Despesas() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles_despesas.container}>
      <View style={styles_despesas.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles_despesas.backButton}
          accessibilityLabel="Voltar"
          accessibilityRole="button"
        >
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles_despesas.title}>SaveIt</Text>

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

      <Image
        source={require('@/assets/onda.png')}
        style={styles_despesas.headerWave}
        resizeMode="cover"
        accessibilityLabel="Onda decorativa"
      />

      <View style={styles_despesas.content}>
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
