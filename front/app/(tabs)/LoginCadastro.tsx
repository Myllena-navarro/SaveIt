import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { router } from 'expo-router';

type RootStackParamList = {
  Cadastro: undefined;
  Login: undefined;
};

export default function LoginCadastro() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/logo.jpeg')}
        style={styles.logo}
        accessibilityLabel="Logo do aplicativo SaveIt"
      />

      <Text
        style={[
          styles.logoText,
          { fontSize: 24, fontWeight: 'bold', marginVertical: 20 },
        ]}
      >
        SaveIt
      </Text>

      <TouchableOpacity
        style={[styles.button, { marginBottom: 10 }]}
        onPress={() => navigation.navigate('Cadastro')}
        accessibilityLabel="Botão para cadastro de novo usuário"
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
        accessibilityLabel="Botão para entrar na conta existente"
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

