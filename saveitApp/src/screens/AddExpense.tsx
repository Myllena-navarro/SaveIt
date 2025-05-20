import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {
  useNavigation,
  useRoute,
  NavigationProp,
  RouteProp
} from '@react-navigation/native'; 
import { styles } from '@/src/styles/styles';

type RootStackParamList = {
  CadastroDespesa: undefined;
  AddExpense: { type: 'fixa' | 'variavel' };
  ConfirmacaoDespesa: undefined;
};

export default function AddExpense() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); 
  const route = useRoute<RouteProp<RootStackParamList, 'AddExpense'>>(); 
  const { type } = route.params; 
  const categorias = {
    fixa:     ['Transporte', 'Alimentação', 'Saúde', 'Moradia', 'Outros'],
    variavel: ['Roupa', 'Sapato', 'Presente', 'Livro', 'Outros']
  };
  const periodos = ['Diário', 'Semanal', 'Mensal', 'Anual'];
  const [valor, setValor]           = useState('');
  const [categoria, setCategoria]   = useState(categorias[type][0]);
  const [periodo, setPeriodo]       = useState(periodos[0]);
  const handleSubmit = () => {
    if (!valor) {
      Alert.alert('Campo obrigatório', 'Informe o valor da despesa.'); 
      return;
    }
    navigation.navigate('ConfirmacaoDespesa'); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()} 
        style={styles.backButton}
      >
        <Text style={styles.backIcon}>←</Text> 
      </TouchableOpacity>

      <Text style={styles.title}>
        {type === 'fixa' ? 'Nova Despesa Fixa' : 'Nova Despesa Variável'} 
      </Text>

      <TextInput
        placeholder="Informe o valor da despesa"
        value={valor}
        onChangeText={setValor}
        style={styles.input}
        keyboardType="numeric" 
      />

      <Picker
        selectedValue={categoria}
        onValueChange={setCategoria}
        style={styles.picker}
      >
        {categorias[type].map(c => ( 
          <Picker.Item key={c} label={c} value={c} />
        ))}
      </Picker>

      <Picker
        selectedValue={periodo}
        onValueChange={setPeriodo}
        style={styles.picker}
      >
        {periodos.map(p => ( 
          <Picker.Item key={p} label={p} value={p} />
        ))}
      </Picker>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>ADICIONAR</Text>
      </TouchableOpacity>
    </View>
  );
}
