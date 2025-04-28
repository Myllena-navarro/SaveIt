import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { styles } from '@/src/styles/styles';

// Define o tipo de navegação para o nosso stack de rotas
type RootStackParamList = {
  TelaInicial: undefined;
  LoginCadastro: undefined;
  Cadastro: undefined;
  Login: undefined;
};

export default function LoginCadastro() {
  // Usando o hook useNavigation com o tipo de navegação
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {/* Logo no topo */}
      <Image
        source={require('@/assets/logo.jpeg')}
        style={styles.logo}
      />

      {/* Título da tela */}
      <Text style={styles.title}>SaveIt</Text>

      {/* Botão de Cadastro */}
      <TouchableOpacity
        style={[styles.button, styles.buttonMargin]}
        onPress={() => navigation.navigate('Cadastro')}
        accessible
        accessibilityLabel="Botão para cadastro de novo usuário"
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      {/* Botão de Login */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
        accessible
        accessibilityLabel="Botão para entrar na conta existente"
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
