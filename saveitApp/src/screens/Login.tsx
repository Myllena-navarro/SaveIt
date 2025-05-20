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
import { styles } from '@/src/styles/styles';

type RootStackParamList = {
  Home: undefined;
};

export default function Login() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [erroSenha, setErroSenha] = useState('');
  const [erroGeral, setErroGeral] = useState('');
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    setErroEmail('');
    setErroSenha('');
    setErroGeral('');
    if (email.trim() === '' || senha.trim() === '') {
      if (email.trim() === '') setErroEmail('E-mail não pode ser vazio.');
      if (senha.trim() === '') setErroSenha('Senha não pode ser vazia.');
      return;
    }

    setLoading(true); 
    try {
      const response = await fetch(
        'http://10.0.2.2:8080/api/usuarios/login',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, senha }),
        }
      );

      if (response.ok) {
        navigation.navigate('Home');
      } else if (response.status === 401) {
        setErroSenha('Senha incorreta.');
      } else if (response.status === 404) {
        setErroEmail('E-mail não encontrado.');
      } else {
        setErroGeral('Erro ao fazer login. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro de conexão:', error);
      setErroGeral('Erro de conexão com o servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
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
      {erroEmail ? <Text style={styles.errorText}>{erroEmail}</Text> : null}

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
      {erroSenha ? <Text style={styles.errorText}>{erroSenha}</Text> : null}

      {erroGeral ? <Text style={styles.errorText}>{erroGeral}</Text> : null}

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
