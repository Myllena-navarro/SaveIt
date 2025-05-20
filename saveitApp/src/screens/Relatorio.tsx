import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { styles_relatorio } from '@/src/styles/styles_relatorio';
import { Feather } from '@expo/vector-icons';
import { PieChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

export default function Relatorio() {
  const navigation = useNavigation();

  const pieData = [
    {
      name: 'Gastos Fixos',
      value: 13200,
      color: '#FFCE56',
      legendFontColor: '#000',
      legendFontSize: 14,
    },
    {
      name: 'Alimentação',
      value: 12205.6,
      color: '#FF6384',
      legendFontColor: '#000',
      legendFontSize: 14,
    },
    {
      name: 'Saúde',
      value: 4624.4,
      color: '#36A2EB',
      legendFontColor: '#000',
      legendFontSize: 14,
    },
  ];

  return (
    <ScrollView style={styles_relatorio.container}>
      <View style={styles_relatorio.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>

        <Text style={styles_relatorio.headerTitle}>SaveIt</Text>

        <View style={styles_relatorio.headerButtons}>
          <TouchableOpacity style={styles_relatorio.smallButton}>
            <Text style={styles_relatorio.smallButtonText}>FILTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles_relatorio.smallButton}
            onPress={() => navigation.navigate('ConfirmarRelatorio')}
          >
            <Text style={styles_relatorio.smallButtonText}>GERAR PDF</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles_relatorio.card}>
        <Text style={styles_relatorio.dateText}>AGOSTO | 2024</Text>
        <Text style={styles_relatorio.totalValue}>R$ 32.120,00</Text>
        <Text style={styles_relatorio.chartTitle}>GASTOS FIXOS</Text>

        <PieChart
          data={pieData}
          width={screenWidth * 0.9}
          height={200}
          accessor="value"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
          chartConfig={{
            color: () => '#000',
          }}
        />
      </View>

      {pieData.map((item, index) => (
        <View key={index} style={styles_relatorio.detailCard}>
          <Text style={styles_relatorio.detailText}>
            {item.name.toUpperCase()} {Math.round((item.value / 32120) * 100)}%
          </Text>
          <Text style={styles_relatorio.detailValue}>
            R$ {item.value.toFixed(2).replace('.', ',')}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}
