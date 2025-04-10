import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { styles } from '@/src/styles';

export default function EsqueciSenha() {
  const [email, setEmail] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const [mensagemSucesso, setMensagemSucesso] = useState('');

  const validarEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleRecuperarSenha = () => {
    if (!email || !validarEmail(email)) {
      setMensagemErro('Por favor, insira um e-mail válido.');
      setMensagemSucesso('');
    } else {
      setMensagemErro('');
      setMensagemSucesso('Instruções de recuperação enviadas para o seu e-mail.');
    }
  };

  useEffect(() => {
    if (mensagemSucesso || mensagemErro) {
      const timer = setTimeout(() => {
        setMensagemErro('');
        setMensagemSucesso('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [mensagemSucesso, mensagemErro]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        accessibilityLabel="Campo para digitar seu e-mail"
      />

      {mensagemErro ? <Text style={styles.errorText}>{mensagemErro}</Text> : null}
      {mensagemSucesso ? <Text style={{ color: 'green', marginBottom: 10 }}>{mensagemSucesso}</Text> : null}

      <TouchableOpacity
        style={styles.button}
        onPress={handleRecuperarSenha}
        accessibilityLabel="Botão para recuperar senha"
      >
        <Text style={styles.buttonText}>RECUPERAR SENHA</Text>
      </TouchableOpacity>
    </View>
  );
}


