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
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.containerCentered}>
      <Image
        source={require('@/assets/check.jpeg')} 
        style={styles.iconLarge} 
      />

      <Text style={styles.title}>Despesa adicionada com sucesso!</Text>

      <TouchableOpacity
        onPress={() => navigation.popToTop()} 
        style={[styles.button, { marginTop: 24 }]} 
      >
        <Text style={styles.buttonText}>Voltar ao Início</Text>
      </TouchableOpacity>
    </View>
  );
}
