import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles_despesas = StyleSheet.create({
  // Container principal: ocupa toda a tela e fundo branco
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  // Header com padding e espaço entre itens
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  // Botão de voltar no header
  backButton: {
    padding: 8,
  },
  // Texto "SaveIt" no header
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  // Container dos ícones do header (sino e usuário)
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Onda que sobrepõe a parte inferior do header
  headerWave: {
    position: 'absolute',
    top: 64,             // ajusta conforme altura do header + status bar
    width: width,
    height: 120,
  },

  // Conteúdo com os botões de opção
  content: {
    flex: 1,
    justifyContent: 'center',  // centraliza verticalmente
    alignItems: 'center',      // centraliza horizontalmente
    paddingHorizontal: 32,
  },
  // Botões FIXA/VARIÁVEL
  optionButton: {
    backgroundColor: '#C8FAD1',  // verde claro
    paddingVertical: 14,         // altura do botão
    paddingHorizontal: 24,       // largura interna
    borderRadius: 8,             // cantos arredondados
    width: '100%',               // ocupa toda largura disponível
    alignItems: 'center',        // centraliza texto
    marginVertical: 12,          // espaço entre botões
  },
  // Texto dentro dos botões de opção
  optionButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',            // texto branco
  },
});
