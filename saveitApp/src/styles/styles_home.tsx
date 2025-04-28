import { StyleSheet } from 'react-native';

export const styles_home = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#B7EFC5', // verde clarinho
    padding: 16,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoSmall: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  titleSmall: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  balanceCard: {
    backgroundColor: '#B7EFC5',
    margin: 20,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  balanceTitle: {
    fontSize: 16,
    color: '#555',
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  balanceValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    marginTop: 8,
    fontSize: 12,
    color: '#000',
  },
  chartContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  chartTitle: {
    fontSize: 16,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  chartImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  addButton: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 30,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 16,
    marginLeft: 8,
  },
});
