import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Alert,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { styles } from '@/src/styles/styles';

type RootStackParamList = {
  Cadastro: undefined;
  ConfirmacaoCadastro: undefined;
  LoginCadastro: undefined;
};

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handleCadastro = async () => {
    if (!nome || !email || !senha) {
      Alert.alert('Campos obrigatórios', 'Preencha nome, e-mail e senha.');
      return;
    }
    const usuario = {
      nome,
      dataNascimento,
      cpf,
      email,
      senha,
    };

    try {
      const response = await fetch(
        'http://10.0.2.2:8080/api/usuarios/cadastro',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(usuario),
        }
      );

      if (response.ok) {
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
        navigation.navigate('ConfirmacaoCadastro'); 
      } else {
        const erro = await response.json();
        console.error('Erro ao cadastrar:', erro);
        Alert.alert('Erro', 'Não foi possível realizar o cadastro.');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
      Alert.alert('Erro', 'Erro de conexão com o servidor.');
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()} 
        style={styles.backButton}
      >
        <Text style={{ fontSize: 18 }}>←</Text>
      </TouchableOpacity>

      <Image source={require('@/assets/logo.jpeg')} style={styles.logo} />

      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <TextInput
        placeholder="Data de nascimento"
        value={dataNascimento}
        onChangeText={setDataNascimento}
        style={styles.input}
      />

      <TextInput
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        style={styles.input}
      />

      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address" 
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        style={styles.input}
        secureTextEntry 
        autoCapitalize="none" 
      />

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}
