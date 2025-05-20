import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles_relatorio } from '@/src/styles/styles_relatorio';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function RelatorioDetalhado() {
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

      <ScrollView style={{ marginTop: 20 }}>
        <Text style={styles_relatorio.titleRelatorio}>{mes.toUpperCase()} | {ano}</Text>
        <Text style={styles_relatorio.valorTotal}>R$ 32.120,00</Text>

        <View style={styles_relatorio.graficoContainer}>
          <Text>[Gráfico de Pizza]</Text>
        </View>

        <View style={styles_relatorio.cardCategoria}>
          <Text style={styles_relatorio.nomeCategoria}>Alimentação 38%</Text>
          <Text style={styles_relatorio.valorCategoria}>R$12.205,60</Text>
        </View>

        <View style={styles_relatorio.cardCategoria}>
          <Text style={styles_relatorio.nomeCategoria}>Saúde 20%</Text>
          <Text style={styles_relatorio.valorCategoria}>R$6.424,00</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('ConfirmarRelatorio', { mes, ano })}
          style={styles_relatorio.botaoAvancar}
        >
          <Text style={styles_relatorio.textoBotao}>Avançar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
