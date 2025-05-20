import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation, RouteProp, NavigationProp } from '@react-navigation/native';
import { styles } from '@/src/styles/styles';

type RootStackParamList = {
  ErroEmail: { mensagem?: string };
  Login: undefined;             
  Cadastro: undefined;           
};

export default function ErroEmail() {
  const [mensagemErro, setMensagemErro] = useState('');
  const route = useRoute<RouteProp<RootStackParamList, 'ErroEmail'>>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (route.params?.mensagem) {
      setMensagemErro(route.params.mensagem);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Text style={[styles.errorText, { marginBottom: 20, fontSize: 16 }]} accessibilityRole="alert">
        {mensagemErro || "E-mail não encontrado. Verifique e tente novamente."}
      </Text>

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
