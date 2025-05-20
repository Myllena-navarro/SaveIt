import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles_relatorio } from '@/src/styles/styles_relatorio';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function ConfirmarRelatorio() {
  const navigation = useNavigation();
  const route = useRoute();
  const { mes, ano } = route.params || { mes: 'Agosto', ano: '2024' };

  return (
    <View style={styles_relatorio.container}>
      <View style={styles_relatorio.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles_relatorio.headerTitle}>🟢 SaveIt</Text>

        <View style={styles_relatorio.headerButtons}>
          <TouchableOpacity style={styles_relatorio.smallButton}>
            <Text style={styles_relatorio.smallButtonText}>FILTRAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles_relatorio.smallButton}>
            <Text style={styles_relatorio.smallButtonText}>GERAR PDF</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles_relatorio.confirmacaoTexto}>
        Deseja gerar um PDF do relatório financeiro?
      </Text>

      <Text style={styles_relatorio.confirmacaoMesAno}>
        {mes.toUpperCase()} | {ano}
      </Text>

      <TouchableOpacity
        style={styles_relatorio.botaoConfirmar}
        onPress={() => navigation.navigate('RelatorioSucesso', { mes, ano })}
      >
        <Text style={styles_relatorio.textoBotao}>GERAR PDF</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles_relatorio.botaoCancelar, { marginTop: 10 }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={[styles_relatorio.textoBotao, { color: 'black' }]}>CANCELAR</Text>
      </TouchableOpacity>
    </View>
  );
}
