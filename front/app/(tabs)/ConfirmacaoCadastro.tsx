import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { styles } from '@/src/styles';

// Define as rotas que existem no app
type RootStackParamList = {
  TelaInicial: undefined;
  LoginCadastro: undefined;
  Cadastro: undefined;
  Login: undefined;
};

export default function LoginCadastro() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.jpeg')} style={styles.logo} />

      <Text style={[styles.logoText, { fontSize: 24, fontWeight: 'bold', marginVertical: 20 }]}>
        SaveIt
      </Text>

      <TouchableOpacity
        style={[styles.button, { marginBottom: 10 }]}
        onPress={() => navigation.navigate('Cadastro')}
        accessible={true}
        accessibilityLabel="Botão para cadastro de novo usuário"
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
        accessible={true}
        accessibilityLabel="Botão para entrar na conta existente"
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}


