// src/screens/CadastroDespesa.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { styles } from '@/src/styles/styles';

type RootStackParamList = {
  CadastroDespesa: undefined;
  AddExpense: { type: 'fixa' | 'variavel' };
  ConfirmacaoDespesa: undefined;
};

export default function CadastroDespesa() {
  const [valor, setValor] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Função genérica para adicionar despesa (fixa ou variável)
  const handleAddExpense = (type: 'fixa' | 'variavel') => {
    // Valida se o valor foi informado e se é um número válido
    if (!valor || isNaN(Number(valor)) || Number(valor) <= 0) {
      Alert.alert('Campo obrigatório', 'Informe um valor válido para a despesa.');
      return;
    }
    // Navega para a tela AddExpense passando o tipo de despesa
    navigation.navigate('AddExpense', { type });
  };

  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backIcon}>←</Text>
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>Cadastro de Despesa</Text>

      {/* Campo de valor */}
      <TextInput
        placeholder="Informe o valor da despesa"
        value={valor}
        onChangeText={setValor}
        style={styles.input}
        keyboardType="numeric" // Teclado numérico
      />

      {/* Botões de fluxo */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddExpense('fixa')}
        >
          <Text style={styles.buttonText}>Despesa Fixa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddExpense('variavel')}
        >
          <Text style={styles.buttonText}>Despesa Variável</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
