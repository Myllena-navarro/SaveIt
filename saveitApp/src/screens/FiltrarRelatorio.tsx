import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Picker, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles_relatorio } from '@/src/styles/styles_relatorio';
import { useNavigation } from '@react-navigation/native';

export default function FiltrarRelatorio() {
  const navigation = useNavigation();

  const [mesSelecionado, setMesSelecionado] = useState<string>('Janeiro');
  const [anoSelecionado, setAnoSelecionado] = useState<string>('2024');

  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
  ];

  const anos = ['2023', '2024', '2025'];

  const handleAvancar = () => {
    navigation.navigate('RelatorioDetalhado', {
      mes: mesSelecionado,
      ano: anoSelecionado,
    });
  };

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

      <Text style={{ fontSize: 16, marginBottom: 20 }}>
        Insira o mês e o ano em que deseja verificar o relatório
      </Text>

      <View style={{ marginBottom: 16 }}>
        <Text style={{ marginBottom: 4 }}>Mês</Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
            paddingHorizontal: 8,
            backgroundColor: '#fff',
          }}
        >
          <Picker
            selectedValue={mesSelecionado}
            onValueChange={(itemValue) => setMesSelecionado(itemValue)}
            style={{ height: 40 }}
          >
            {meses.map((mes) => (
              <Picker.Item key={mes} label={mes} value={mes} />
            ))}
          </Picker>
        </View>
      </View>

      <View style={{ marginBottom: 30 }}>
        <Text style={{ marginBottom: 4 }}>Ano</Text>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
            paddingHorizontal: 8,
            backgroundColor: '#fff',
          }}
        >
          <Picker
            selectedValue={anoSelecionado}
            onValueChange={(itemValue) => setAnoSelecionado(itemValue)}
            style={{ height: 40 }}
          >
            {anos.map((ano) => (
              <Picker.Item key={ano} label={ano} value={ano} />
            ))}
          </Picker>
        </View>
      </View>

      <TouchableOpacity
        onPress={handleAvancar}
        style={{
          alignSelf: 'center',
          backgroundColor: '#2ecc71',
          padding: 12,
          borderRadius: 30,
        }}
        accessibilityLabel="Avançar para relatório"
      >
        <Feather name="arrow-right" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}
