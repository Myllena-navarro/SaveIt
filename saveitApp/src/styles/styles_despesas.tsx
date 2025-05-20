import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles_despesas = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerWave: {
    position: 'absolute',
    top: 64,             
    width: width,
    height: 120,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',     
    paddingHorizontal: 32,
  },

  optionButton: {
    backgroundColor: '#C8FAD1',  
    paddingVertical: 14,         
    paddingHorizontal: 24,       
    borderRadius: 8,             
    width: '100%',               
    alignItems: 'center',       
    marginVertical: 12,         
  },
  optionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',          
  },

  despesaItem: {
  backgroundColor: '#F0F0F0',
  padding: 16,
  borderRadius: 8,
  marginBottom: 12,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},

despesaNome: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#333',
},

despesaValor: {
  fontSize: 14,
  color: '#777',
  marginTop: 4,
},

despesaAcoes: {
  flexDirection: 'row',
  alignItems: 'center',
},

});
