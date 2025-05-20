import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingTop: 60,
  },

  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },

  bottomWaves: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },

  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 8,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 20,
  },

  subtitle: {
    fontSize: 16,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 30,
  },

  button: {
    backgroundColor: '#C8FAD1',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonMargin: {
    marginBottom: 10,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginVertical: 16,
  },

  input: {
    width: '90%',
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 8,
  },

  picker: {
    width: '90%',
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    marginVertical: 8,
  },

  backButton: {
    position: 'absolute',
    top: 20,
    left: 16,
    padding: 8,
  },

  backIcon: {
    fontSize: 18,
    color: '#000000',
  },

  containerCentered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 60,
  },

  successIconContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },

  successIconBackground: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E6F8E6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconLarge: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 24,
  },

  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  successSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },

  successDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: 'gray',
    marginBottom: 30,
  },

  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginVertical: 4,
    width: '90%',
  },

  successIcon: {  
    width: 50,
    height: 50,
    backgroundColor: 'green', 
    borderRadius: 25,
  },
});
