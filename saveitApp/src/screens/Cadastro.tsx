// Importa React e hooks de estado para gerenciar valores dos campos
import React, { useState } from 'react';
// Componentes de UI do React Native e Alert para mensagens de feedback
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  Alert,
} from 'react-native';
// Hook de navegação do React Navigation e tipo das rotas
import { useNavigation, NavigationProp } from '@react-navigation/native';
// Importa estilos centralizados
import { styles } from '@/src/styles/styles';

// Mapeia as rotas usadas pela tela de Cadastro e navegação
type RootStackParamList = {
  Cadastro: undefined;
  ConfirmacaoCadastro: undefined;
  LoginCadastro: undefined;
};

export default function Cadastro() {
  // Estados para armazenar os valores dos campos do formulário
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Instancia a função de navegação com tipagem de rotas
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Função chamada ao pressionar o botão Cadastrar
  const handleCadastro = async () => {
    // Validação mínima: garante nome, e-mail e senha preenchidos
    if (!nome || !email || !senha) {
      Alert.alert('Campos obrigatórios', 'Preencha nome, e-mail e senha.');
      return;
    }

    // Monta o objeto que será enviado ao backend
    const usuario = {
      nome,
      dataNascimento,
      cpf,
      email,
      senha,
    };

    try {
      // Requisição POST para a API (endereço local no emulator Android)
      const response = await fetch(
        'http://10.0.2.2:8080/api/usuarios/cadastro',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(usuario),
        }
      );

      if (response.ok) {
        // Se cadastro bem-sucedido, mostra alerta e navega à confirmação
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
        navigation.navigate('ConfirmacaoCadastro'); // Navegar para a tela de confirmação
      } else {
        // Lê o erro retornado e exibe mensagem genérica
        const erro = await response.json();
        console.error('Erro ao cadastrar:', erro);
        Alert.alert('Erro', 'Não foi possível realizar o cadastro.');
      }
    } catch (error) {
      // Erro de rede ou servidor indisponível
      console.error('Erro de rede:', error);
      Alert.alert('Erro', 'Erro de conexão com o servidor.');
    }
  };

  return (
    // Container principal da tela
    <View style={styles.container}>
      {/* Botão de voltar, fixa no topo esquerdo */}
      <TouchableOpacity
        onPress={() => navigation.goBack()} // Retorna para a tela anterior
        style={styles.backButton}
      >
        {/* Seta de voltar */}
        <Text style={{ fontSize: 18 }}>←</Text>
      </TouchableOpacity>

      {/* Logo do app no topo */}
      <Image source={require('@/assets/logo.jpeg')} style={styles.logo} />

      {/* Título da tela */}
      <Text style={styles.title}>Cadastro</Text>

      {/* Campo de nome */}
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      {/* Campo de data de nascimento */}
      <TextInput
        placeholder="Data de nascimento"
        value={dataNascimento}
        onChangeText={setDataNascimento}
        style={styles.input}
      />

      {/* Campo de CPF */}
      <TextInput
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        style={styles.input}
      />

      {/* Campo de e-mail com teclado adequado */}
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address" // Tipo de teclado adequado para e-mails
        autoCapitalize="none" // Evitar capitalização automática do e-mail
      />

      {/* Campo de senha, oculta o texto */}
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        style={styles.input}
        secureTextEntry // Campo de senha oculta
        autoCapitalize="none" // Evitar capitalização automática da senha
      />

      {/* Botão de cadastro */}
      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}




