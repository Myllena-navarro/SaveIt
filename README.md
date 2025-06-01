# SaveIt 🪙

CESAR School | Programação Orientada a Objetos - 2025.1

## Descrição
O SaveIt é um sistema interativo projetado para ajudar os usuários a gerencias dinheiro, acompanhando gastos e monitoriando as economicas para metas especificas do usuário. O intuito é ajudar no controle das finanças de forma prática e intuitiva.

## Principais Funcionalidades

- Gerenciamento de Gastos | Registros e categorização de gastos.

- Planejamento e Acompanhamento de Metas | Definição de objetivos financeiros e acompanhemento do progresso.

- Resumo Financeiro | Para melhor visualização das finanças.

- Interface Intuitiva | Aplicação fácil de usar.

## Histórias de Usuário

1- Realizar cadastro de usuário;

2- Realizar login na plataforma;

3- Cadastro de despesas fixas;

4- Cadastro de despesas variáveis;

5- Editar e excluir despesas;

6- Definir meta financeira;

7- Gerar relatório financeiro.

- https://docs.google.com/document/d/1ptKX0RaaJ0QXxgPUBWRUOpCPXFySNvHj4qX7t7hALSU/edit?tab=t.0

## Protótipo

- https://www.figma.com/proto/qgsgSpHZ26YVbImo4JBUza/SaveIt?node-id=0-1&t=119YVU0uwH2aDVEK-1

## Screencast

- Protótipo de baixa fidelidade | https://youtu.be/Tob6Ybmy9UA?si=kTYnBl503sYGhAjo
- Entrega 2, Duas histórias implementadas | https://youtube.com/shorts/tyowoEMJ53E?feature=share
- Entrega 3, Mais duas histórias implementadas | https://youtu.be/V4cL9TUKXQU?si=-C9dVo_YTEwkqD6D
- Entrega 4, Screencast | Últimas três histórias implementadas | 

## Diagramas do Sistema
![SaveIt_Diagrama](https://github.com/user-attachments/assets/fd3b57b7-469f-4859-97a0-9344a3174175)

## Como executar a aplicação

Siga os passos abaixo para rodar a aplicação em seu dispositivo ou navegador:

1. Acesse a pasta frontend, utilizando o comando *cd* para navegar entre os diretórios;
2. Inicie o servidor de desenvolvimento, utilizando o comando abaixo:
_npx expo start_
3. Um QR Code será gerado no terminal ou no navegador. Escaneie o QR Code com a câmera do seu celular. Certifique-se de ter o aplicativo *Expo Go* instalado em seu dispositivo;
4. Alternativas de visualização: caso prefira, também é possível executar o projeto no navegador clicando na opção "Run in web browser" no terminal ou na interface web do Expo.

Para acessar e rodar a aplicação em java e springboot, siga as Instruções abaixo:
1. Acesse o diretório back-end utilizando o comando <em>cd Back-end/back-end/saveit<em>
2. Para rodar o projeto é necessario que esteja utilizando Java JDK 21 ou superior.
3. Para rodar o projeto é necessario que esteja utilizando Maven 3.8 ou superior.
4. Para **compilar o projeto**, execute o comando:
   > mvn clean install
5. Para **rodar o projeto**, execute o comando:
   > mvn spring-boot:run

## Observações sobre a aplicação:

**Encapsulamento**
O sistema aplica o princípio de encapsulamento ao manter os atributos das classes como private e acessá-los por meio de métodos públicos (getters e setters). Isso assegura o controle sobre os dados e protege o estado interno dos objetos.

**Uso de Persistência de Dados**
A persistência é gerenciada com Spring Data JPA, por meio de interfaces como RepositorioDespesas, RepositorioMetasFinanceiras e RepositorioUsuarios. Essas interfaces permitem realizar operações com o banco de dados de forma simples e eficiente, com suporte automático a consultas, inserções, atualizações e exclusões.

**Injeção de Dependência**
O projeto utiliza injeção de dependência com as anotações do Spring (@Autowired, @InjectMocks, etc.), promovendo baixo acoplamento entre as classes e facilitando a testabilidade e manutenção do código.

**Segurança com Spring Security**
A autenticação e autorização são gerenciadas com Spring Security, garantindo acesso restrito aos recursos com base nas credenciais do usuário autenticado. O uso do SecurityContextHolder permite identificar o usuário logado nas requisições protegidas.

**Testes Automatizados**
O sistema inclui testes automatizados com JUnit 5 e Mockito, cobrindo tanto as regras de negócio (serviços) quanto os endpoints REST (controllers). Os testes simulam o comportamento de componentes externos e verificam o resultado das operações com base em cenários esperados.


## Time
- Débora Buriti (@debburiti)
- Mirella Santana (@mihebs)
- Myllena Navarro (@Myllena-navarro)
