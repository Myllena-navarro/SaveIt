import { StyleSheet } from 'react-native';

export const styles_relatorio = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  smallButton: {
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  smallButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },

  titleRelatorio: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  valorTotal: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#10B981',
    textAlign: 'center',
    marginBottom: 20,
  },
  graficoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
    marginBottom: 20,
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
  },

  cardCategoria: {
    backgroundColor: '#F3F4F6',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nomeCategoria: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4B5563',
  },
  valorCategoria: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#111827',
  },

  botaoAvancar: {
    backgroundColor: '#10B981',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  confirmacaoTexto: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 100,
    marginBottom: 10,
    color: '#111827',
  },
  confirmacaoMesAno: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#10B981',
  },
  botaoConfirmar: {
    backgroundColor: '#10B981',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  botaoCancelar: {
    backgroundColor: '#E5E7EB',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 20,
  },

  sucessoCirculo: {
    backgroundColor: '#10B981',
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  sucessoTexto: {
    fontSize: 16,
    textAlign: 'center',
    color: '#111827',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
});
