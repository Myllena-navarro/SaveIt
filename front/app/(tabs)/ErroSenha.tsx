import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp, useNavigation, NavigationProp } from '@react-navigation/native';
import { styles } from '@/src/styles';

type RootStackParamList = {
  ErroSenha: { mensagem?: string };
  Login: undefined;
  // Outras telas, se desejar, podem ser adicionadas aqui
};

export default function ErroSenha() {
  const [mensagemErro, setMensagemErro] = useState('');
  const route = useRoute<RouteProp<RootStackParamList, 'ErroSenha'>>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (route.params?.mensagem) {
      setMensagemErro(route.params.mensagem);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Text style={[styles.errorText, { marginBottom: 20, fontSize: 16 }]}>
        {mensagemErro || 'Senha incorreta. Tente novamente.'}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
        accessibilityLabel="Voltar para a tela anterior"
      >
        <Text style={styles.buttonText}>VOLTAR</Text>
      </TouchableOpacity>
    </View>
  );
}




