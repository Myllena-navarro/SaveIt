import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles_relatorio = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2ecc71',
  },

  headerButtons: {
    flexDirection: 'row',
    gap: 10,
  },

  smallButton: {
    backgroundColor: '#eee',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },

  smallButtonText: {
    fontSize: 12,
    color: '#333',
  },

  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
  },

  dateText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },

  totalValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },

  chartTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },

  detailCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ddd',
  },

  detailText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },

  detailValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
});
