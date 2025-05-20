import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MetaFinanceira() {
  const navigation = useNavigation();

  const [etapa, setEtapa] = useState(1);
  const [nomeMeta, setNomeMeta] = useState('');
  const [valorMeta, setValorMeta] = useState('');
  const [prazoMeta, setPrazoMeta] = useState('');

  const avancarEtapa = () => {
    if (etapa < 5) {
      setEtapa(etapa + 1);
    }
  };

  const voltarEtapa = () => {
    if (etapa > 1) {
      setEtapa(etapa - 1);
    } else {
      navigation.goBack();
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={voltarEtapa}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nova Meta Financeira</Text>
      </View>

      {etapa === 1 && (
        <View style={styles.stepContainer}>
          <Text style={styles.label}>Qual é o nome da sua meta?</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: Comprar um notebook"
            value={nomeMeta}
            onChangeText={setNomeMeta}
          />
        </View>
      )}

      {etapa === 2 && (
        <View style={styles.stepContainer}>
          <Text style={styles.label}>Qual é o valor que deseja alcançar?</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 3000"
            keyboardType="numeric"
            value={valorMeta}
            onChangeText={setValorMeta}
          />
        </View>
      )}

      {etapa === 3 && (
        <View style={styles.stepContainer}>
          <Text style={styles.label}>Qual o prazo para alcançar essa meta?</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 6 meses"
            value={prazoMeta}
            onChangeText={setPrazoMeta}
          />
        </View>
      )}

      {etapa === 4 && (
        <View style={styles.stepContainer}>
          <Text style={styles.label}>Confirme os dados da sua meta:</Text>
          <Text style={styles.confirmText}>🏷 Nome: {nomeMeta}</Text>
          <Text style={styles.confirmText}>💰 Valor: R$ {valorMeta}</Text>
          <Text style={styles.confirmText}>⏳ Prazo: {prazoMeta}</Text>
        </View>
      )}

      {etapa === 5 && (
        <View style={styles.stepContainer}>
          <Text style={styles.label}>Meta cadastrada com sucesso! 🎉</Text>
          <Text style={styles.confirmText}>🏷 {nomeMeta}</Text>
          <Text style={styles.confirmText}>💰 R$ {valorMeta}</Text>
          <Text style={styles.confirmText}>⏳ {prazoMeta}</Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#4CAF50', marginTop: 20 }]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Voltar para início</Text>
          </TouchableOpacity>
        </View>
      )}

      {etapa < 5 && (
        <TouchableOpacity style={styles.button} onPress={avancarEtapa}>
          <Text style={styles.buttonText}>
            {etapa === 4 ? 'Confirmar Meta' : 'Avançar'}
          </Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  stepContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  confirmText: {
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#000',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
