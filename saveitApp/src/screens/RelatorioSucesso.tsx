import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles_relatorio } from '@/src/styles/styles_relatorio';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function RelatorioSucesso() {
  const navigation = useNavigation();
  const route = useRoute();
  const { mes, ano } = route.params || { mes: 'Agosto', ano: '2024' };

  return (
    <View style={styles_relatorio.container}>
      <View style={{ alignItems: 'center', marginTop: 100 }}>
        <View style={styles_relatorio.sucessoCirculo}>
          <Feather name="check" size={48} color="white" />
        </View>

        <Text style={styles_relatorio.sucessoTexto}>
          O PDF do relatório financeiro de {mes.toUpperCase()} | {ano} foi gerado e enviado para o e-mail cadastrado na nossa plataforma.
        </Text>

        <TouchableOpacity
          style={styles_relatorio.botaoConfirmar}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles_relatorio.textoBotao}>VOLTAR AO INÍCIO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
