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

  const handleAddExpense = (type: 'fixa' | 'variavel') => {
    if (!valor || isNaN(Number(valor)) || Number(valor) <= 0) {
      Alert.alert('Campo obrigatório', 'Informe um valor válido para a despesa.');
      return;
    }
    navigation.navigate('AddExpense', { type });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backIcon}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Cadastro de Despesa</Text>

      <TextInput
        placeholder="Informe o valor da despesa"
        value={valor}
        onChangeText={setValor}
        style={styles.input}
        keyboardType="numeric" 
      />

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
