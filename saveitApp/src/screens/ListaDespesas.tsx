import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { styles_despesas } from '@/src/styles/styles_despesas';

type RootStackParamList = {
  Home: undefined;
  EditarDespesa: { id: string };
};

type Despesa = {
  id: string;
  nome: string;
  valor: number;
};

export default function ListaDespesas() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [despesas, setDespesas] = useState<Despesa[]>([
    { id: '1', nome: 'Aluguel', valor: 1200 },
    { id: '2', nome: 'Internet', valor: 99.9 },
    { id: '3', nome: 'Netflix', valor: 39.9 },
  ]);

  const excluirDespesa = (id: string) => {
    Alert.alert(
      'Excluir despesa',
      'Tem certeza que deseja excluir essa despesa?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => {
            setDespesas((prev) => prev.filter((d) => d.id !== id));
          },
        },
      ]
    );
  };

  const renderItem = ({ item }: { item: Despesa }) => (
    <View style={styles_despesas.despesaItem}>
      <View>
        <Text style={styles_despesas.despesaNome}>{item.nome}</Text>
        <Text style={styles_despesas.despesaValor}>R$ {item.valor.toFixed(2)}</Text>
      </View>
      <View style={styles_despesas.despesaAcoes}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditarDespesa', { id: item.id })}
        >
          <Feather name="edit" size={22} color="#4CAF50" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => excluirDespesa(item.id)} style={{ marginLeft: 16 }}>
          <Feather name="trash-2" size={22} color="#F44336" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles_despesas.container}>
      <View style={styles_despesas.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles_despesas.backButton}
        >
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles_despesas.title}>Despesas Cadastradas</Text>
        <View style={styles_despesas.headerIcons}>
          <Feather name="bell" size={24} color="black" />
          <Feather name="user" size={24} color="black" style={{ marginLeft: 16 }} />
        </View>
      </View>

      <FlatList
        data={despesas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}
