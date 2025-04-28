// src/screens/AddExpense.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Importação do Picker
import {
  useNavigation,
  useRoute,
  NavigationProp,
  RouteProp
} from '@react-navigation/native'; // useNavigation e useRoute do React Navigation
import { styles } from '@/src/styles/styles';

// Definindo os tipos de navegação para esse componente
type RootStackParamList = {
  CadastroDespesa: undefined;
  AddExpense: { type: 'fixa' | 'variavel' };
  ConfirmacaoDespesa: undefined;
};

export default function AddExpense() {
  // Pegando navegação e parâmetros da rota
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Navegação para outras telas
  const route = useRoute<RouteProp<RootStackParamList, 'AddExpense'>>(); // Obtendo parâmetros da tela atual
  const { type } = route.params; // Desestruturando o tipo de despesa (fixa ou variável)

  // Categorias e períodos para escolher nas despesas
  const categorias = {
    fixa:     ['Transporte', 'Alimentação', 'Saúde', 'Moradia', 'Outros'],
    variavel: ['Roupa', 'Sapato', 'Presente', 'Livro', 'Outros']
  };
  const periodos = ['Diário', 'Semanal', 'Mensal', 'Anual'];

  // States para armazenar os valores de entrada
  const [valor, setValor]           = useState('');
  const [categoria, setCategoria]   = useState(categorias[type][0]);
  const [periodo, setPeriodo]       = useState(periodos[0]);

  // Função para validar e enviar a despesa
  const handleSubmit = () => {
    if (!valor) {
      Alert.alert('Campo obrigatório', 'Informe o valor da despesa.'); // Alerta caso o valor não seja preenchido
      return;
    }
    // TODO: salvar no state / API
    navigation.navigate('ConfirmacaoDespesa'); // Navegar para a tela de confirmação
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()} // Voltar para a tela anterior
        style={styles.backButton}
      >
        <Text style={styles.backIcon}>←</Text> {/* Ícone de voltar */}
      </TouchableOpacity>

      <Text style={styles.title}>
        {type === 'fixa' ? 'Nova Despesa Fixa' : 'Nova Despesa Variável'} {/* Título dinâmico dependendo do tipo de despesa */}
      </Text>

      <TextInput
        placeholder="Informe o valor da despesa"
        value={valor}
        onChangeText={setValor}
        style={styles.input}
        keyboardType="numeric" // Entrada de número
      />

      <Picker
        selectedValue={categoria}
        onValueChange={setCategoria}
        style={styles.picker}
      >
        {categorias[type].map(c => ( // Renderizando as categorias baseadas no tipo de despesa
          <Picker.Item key={c} label={c} value={c} />
        ))}
      </Picker>

      <Picker
        selectedValue={periodo}
        onValueChange={setPeriodo}
        style={styles.picker}
      >
        {periodos.map(p => ( // Renderizando os períodos
          <Picker.Item key={p} label={p} value={p} />
        ))}
      </Picker>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit} // Enviar a despesa ao clicar no botão
      >
        <Text style={styles.buttonText}>ADICIONAR</Text>
      </TouchableOpacity>
    </View>
  );
}
