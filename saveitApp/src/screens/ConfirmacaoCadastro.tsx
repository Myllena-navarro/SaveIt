import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { styles } from '@/src/styles/styles';

type RootStackParamList = {
  Login: undefined;
};

export default function ConfirmacaoCadastro() {
  // Hook de navegação
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      {/* Ícone de sucesso (check verde) */}
      <View style={styles.successIconContainer}>
        <View style={styles.successIconBackground}>
          <Image
            source={require('@/assets/check.jpeg')} // Imagem do ícone de sucesso
            style={styles.successIcon}
          />
        </View>
      </View>

      {/* Texto de sucesso */}
      <Text style={styles.successTitle}>Parabéns!</Text>
      <Text style={styles.successSubtitle}>Cadastro realizado com sucesso.</Text>
      <Text style={styles.successDescription}>
        Faça o login para aproveitar as ferramentas do SaveIt.
      </Text>

      {/* Botão de login */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')} // Navega para a tela de login
      >
        <Text style={styles.buttonText}>FAZER LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
