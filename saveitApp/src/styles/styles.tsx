// src/styles/index.ts
// Arquivo central de estilos para toda a aplicação
// Contém estilos reutilizáveis para diferentes componentes e telas
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  /**
   * Container geral das telas de Login/Cadastro e Cadastro
   */
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingTop: 60,
  },

  /**
   * Conteúdo centralizado na Splash Screen
   */
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },

  /**
   * Fundo de ondas decorativas na parte inferior da Splash Screen
   */
  bottomWaves: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },

  /**
   * Logo do aplicativo
   */
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  /**
   * Texto principal do Splash (label do app)
   */
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 8,
  },

  /**
   * Título principal das telas
   */
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginVertical: 20,
  },

  /**
   * Subtítulo geral para telas
   */
  subtitle: {
    fontSize: 16,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 30,
  },

  /**
   * Estilo para botões principais
   */
  button: {
    backgroundColor: '#C8FAD1',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
  },

  /**
   * Margem inferior específica para o primeiro botão
   */
  buttonMargin: {
    marginBottom: 10,
  },

  /**
   * Texto interno dos botões
   */
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  /**
   * Row de botões lado a lado
   */
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginVertical: 16,
  },

  /**
   * Estilo para campos de input
   */
  input: {
    width: '90%',
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 8,
  },

  /**
   * Estilo para Picker (categoria, periodicidade)
   */
  picker: {
    width: '90%',
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    marginVertical: 8,
  },

  /**
   * Botão de voltar
   */
  backButton: {
    position: 'absolute',
    top: 20,
    left: 16,
    padding: 8,
  },

  /**
   * Ícone de voltar (texto ou ícone)
   */
  backIcon: {
    fontSize: 18,
    color: '#000000',
  },

  /**
   * Container centralizado para telas sem inputs (sucesso, etc.)
   */
  containerCentered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 60,
  },

  /**
   * Container para ícone de sucesso
   */
  successIconContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },

  /**
   * Fundo do ícone de sucesso
   */
  successIconBackground: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#E6F8E6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  /**
   * Ícone grande de sucesso (<Image />)
   */
  iconLarge: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 24,
  },

  /**
   * Título da tela de sucesso
   */
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  /**
   * Subtítulo da tela de sucesso
   */
  successSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },

  /**
   * Descrição adicional na tela de sucesso
   */
  successDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: 'gray',
    marginBottom: 30,
  },

  /**
   * Texto de erro para validações
   */
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginVertical: 4,
    width: '90%',
  },

  successIcon: {  // Adicionando a propriedade successIcon
    width: 50,
    height: 50,
    backgroundColor: 'green',  // Exemplo de cor de fundo, altere conforme necessário
    borderRadius: 25,  // Fazendo o ícone redondo, se necessário
  },
});
