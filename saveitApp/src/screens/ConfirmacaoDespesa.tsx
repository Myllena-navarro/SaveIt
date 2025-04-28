import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { styles } from '@/src/styles/styles';

type RootStackParamList = {
  CadastroDespesa: undefined;
  AddExpense: { type: 'fixa' | 'variavel' };
  ConfirmacaoDespesa: undefined;
};

export default function ConfirmacaoDespesa() {
  // Instancia o hook de navegação com a tipagem correta
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.containerCentered}>
      {/* Ícone de sucesso - Check */}
      <Image
        source={require('@/assets/check.jpeg')} // Imagem do ícone de sucesso
        style={styles.iconLarge} // Estilo do ícone de sucesso
      />

      {/* Título da tela */}
      <Text style={styles.title}>Despesa adicionada com sucesso!</Text>

      {/* Botão de navegação para voltar ao início */}
      <TouchableOpacity
        onPress={() => navigation.popToTop()} // Volta para o topo da pilha de navegação
        style={[styles.button, { marginTop: 24 }]} // Estilo do botão, com margem adicional
      >
        <Text style={styles.buttonText}>Voltar ao Início</Text>
      </TouchableOpacity>
    </View>
  );
}
