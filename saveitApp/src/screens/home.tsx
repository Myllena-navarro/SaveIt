import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { BarChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';
import { styles_home } from '@/src/styles/styles_home';

const screenWidth = Dimensions.get('window').width;

export default function Home() {
  const navigation = useNavigation();

  const data = {
    labels: ['01', '05', '10', '15', '20', '25', '30'],
    datasets: [
      {
        data: [120, 450, 300, 200, 500, 700, 250],
      },
    ],
  };

  return (
    <ScrollView style={styles_home.container}>
      <View style={styles_home.header}>
        <View style={styles_home.headerLeft}>
          <Image
            source={require('../../assets/logo.jpeg')}
            style={styles_home.logoSmall}
            accessibilityLabel="Logo SaveIt"
          />
          <Text style={styles_home.titleSmall}>SaveIt</Text>
        </View>

        <View style={styles_home.headerRight}>
          <Feather name="bell" size={24} color="black" accessibilityLabel="Notificações" />
          <Feather name="user" size={24} color="black" style={{ marginLeft: 16 }} accessibilityLabel="Perfil do usuário" />
        </View>
      </View>

      <View style={styles_home.balanceCard}>
        <Text style={styles_home.balanceTitle}>Gastos do mês</Text>
        <View style={styles_home.balanceRow}>
          <Text style={styles_home.balanceValue}>R$ 1.234.567,90</Text>
          <Ionicons name="eye-outline" size={24} color="black" style={{ marginLeft: 8 }} accessibilityLabel="Visualizar detalhes" />
        </View>
      </View>

      <View style={styles_home.menuContainer}>
        {['Despesas', 'Metas', 'Relatórios'].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles_home.menuItem}
            accessibilityLabel={`Ir para ${item}`}
            onPress={() => {
              if (item === 'Metas') navigation.navigate('MetasFinanceiras');
              else if (item === 'Relatórios') navigation.navigate('Relatorios');
              else navigation.navigate('Despesas');
            }}
          >
            <Feather
              name={
                item === 'Despesas'
                  ? 'credit-card'
                  : item === 'Metas'
                  ? 'target'
                  : 'file-text'
              }
              size={32}
              color="black"
            />
            <Text style={styles_home.menuText}>{item}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          style={styles_home.menuItem}
          accessibilityLabel="Cadastrar nova despesa"
          onPress={() => navigation.navigate('CadastroDespesa')}
        >
          <Feather name="plus" size={32} color="black" />
          <Text style={styles_home.menuText}>Nova Despesa</Text>
        </TouchableOpacity>
      </View>

      <View style={styles_home.chartContainer}>
        <Text style={styles_home.chartTitle}>Despesas de Março</Text>
        <BarChart
          data={data}
          width={screenWidth * 0.9}
          height={220}
          fromZero
          yAxisLabel="R$ "
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          style={{ borderRadius: 16, marginVertical: 8 }}
        />
      </View>
    </ScrollView>
  );
}
