// Login.tsx - Tela de login com validação e navegação

import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { styles } from '@/src/styles/styles'; // Importa estilos compartilhados

// Define a tipagem das rotas para navegação
type RootStackParamList = {
  Home: undefined; // Tela Home não espera parâmetros
};

export default function Login() {
  // Hook para navegação, tipado com as rotas definidas
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Estados para armazenar inputs do usuário e mensagens de erro
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [erroSenha, setErroSenha] = useState('');
  const [erroGeral, setErroGeral] = useState('');
  const [loading, setLoading] = useState(false);

  // Função executada ao pressionar o botão de login
  const handleLogin = async () => {
    // Reseta mensagens de erro antes de validar
    setErroEmail('');
    setErroSenha('');
    setErroGeral('');

    // Validação simples: campos não podem estar vazios
    if (email.trim() === '' || senha.trim() === '') {
      if (email.trim() === '') setErroEmail('E-mail não pode ser vazio.');
      if (senha.trim() === '') setErroSenha('Senha não pode ser vazia.');
      return;
    }

    setLoading(true); // Indica carregamento
    try {
      // Faz requisição POST para a API de login
      const response = await fetch(
        'http://10.0.2.2:8080/api/usuarios/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, senha }),
        }
      );

      if (response.ok) {
        // Se login bem‑sucedido, navega para Home
        navigation.navigate('Home');
      } else if (response.status === 401) {
        // senha incorreta
        setErroSenha('Senha incorreta.');
      } else if (response.status === 404) {
        // e-mail não encontrado
        setErroEmail('E-mail não encontrado.');
      } else {
        // outros erros gerais
        setErroGeral('Erro ao fazer login. Tente novamente.');
      }
    } catch (error) {
      // Erro de conexão
      console.error('Erro de conexão:', error);
      setErroGeral('Erro de conexão com o servidor.');
    } finally {
      setLoading(false); // encerra indicador de carregamento
    }
  };

  return (
    // Ajusta layout quando teclado aparece
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Campo de e-mail com teclado apropriado */}
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        accessibilityLabel="Campo de e-mail"
      />
      {/* Exibe erro de e-mail, se houver */}
      {erroEmail ? <Text style={styles.errorText}>{erroEmail}</Text> : null}

      {/* Campo de senha com entrada segura */}
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        accessibilityLabel="Campo de senha"
      />
      {/* Exibe erro de senha, se houver */}
      {erroSenha ? <Text style={styles.errorText}>{erroSenha}</Text> : null}

      {/* Exibe erro geral, se houver */}
      {erroGeral ? <Text style={styles.errorText}>{erroGeral}</Text> : null}

      {/* Botão de login desabilitado enquanto carrega */}
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={loading}
        accessibilityLabel="Botão para entrar no aplicativo"
      >
        <Text style={styles.buttonText}>
          {loading ? 'ENTRANDO...' : 'ENTRAR'}
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}


