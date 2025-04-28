import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp, useNavigation, NavigationProp } from '@react-navigation/native';
import { styles } from '@/src/styles/styles';

type RootStackParamList = {
  ErroSenha: { mensagem?: string }; // Tela que pode receber uma mensagem de erro opcional
  Login: undefined; // Tela de login (sem parâmetros)
};

export default function ErroSenha() {
  const [mensagemErro, setMensagemErro] = useState('');

  // Obtém os parâmetros da rota atual
  const route = useRoute<RouteProp<RootStackParamList, 'ErroSenha'>>();

  // Hook para navegação
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    // Atualiza a mensagem de erro caso exista algum parâmetro de mensagem
    if (route.params?.mensagem) {
      setMensagemErro(route.params.mensagem);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      {/* Exibe a mensagem de erro */}
      <Text style={[styles.errorText, { marginBottom: 20, fontSize: 16, color: 'red' }]}>
        {mensagemErro || 'Senha incorreta. Tente novamente.'}
      </Text>

      {/* Botão para voltar para a tela anterior */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
        accessibilityLabel="Voltar para a tela anterior"
        accessibilityHint="Retorna para a tela anterior onde você pode tentar novamente"
      >
        <Text style={styles.buttonText}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
}




