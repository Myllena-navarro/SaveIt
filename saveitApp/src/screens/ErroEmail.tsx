import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation, RouteProp, NavigationProp } from '@react-navigation/native';
import { styles } from '@/src/styles/styles';

// Tipagem das rotas que esta tela conhece
type RootStackParamList = {
  ErroEmail: { mensagem?: string }; // Tela que pode receber uma mensagem de erro opcional
  Login: undefined;                // Tela de login, sem parâmetros
  Cadastro: undefined;            // Tela de cadastro, sem parâmetros
  // Outras rotas podem ser adicionadas aqui conforme o app cresce
};

export default function ErroEmail() {
  // Estado local para armazenar a mensagem de erro
  const [mensagemErro, setMensagemErro] = useState('');

  // Obtemos os parâmetros da rota atual usando useRoute tipado corretamente
  const route = useRoute<RouteProp<RootStackParamList, 'ErroEmail'>>();

  // Hook para controlar a navegação entre telas, também tipado
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Sempre que os parâmetros mudarem, atualizamos a mensagem de erro se existir
  useEffect(() => {
    if (route.params?.mensagem) {
      setMensagemErro(route.params.mensagem);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      {/* Exibe a mensagem de erro ou um texto padrão */}
      <Text style={[styles.errorText, { marginBottom: 20, fontSize: 16 }]} accessibilityRole="alert">
        {mensagemErro || "E-mail não encontrado. Verifique e tente novamente."}
      </Text>

      {/* Botão para voltar à tela anterior */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()} // Retorna para a última tela visitada
        accessibilityLabel="Voltar para a tela anterior"
        accessibilityHint="Retorna para a tela anterior onde você pode tentar novamente"
      >
        <Text style={styles.buttonText}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
}
