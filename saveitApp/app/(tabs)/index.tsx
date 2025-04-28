import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Suas telas importadas
import LoginCadastro from '@/src/screens/LoginCadastro';
import Cadastro from '@/src/screens/Cadastro';
import ConfirmacaoCadastro from '@/src/screens/ConfirmacaoCadastro';
import Login from '@/src/screens/Login';
import ErroEmail from '@/src/screens/ErroEmail';
import ErroSenha from '@/src/screens/ErroSenha';
import EsqueciSenha from '@/src/screens/EsqueciSenha';
import Home from '@/src/screens/home';
import CadastroDespesa from '@/src/screens/CadastroDespesa';
import AddExpense from '@/src/screens/AddExpense';
import ConfirmacaoDespesa from '@/src/screens/ConfirmacaoDespesa';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="telaInicial">
      <Stack.Screen name="LoginCadastro" component={LoginCadastro} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
      <Stack.Screen name="ConfirmacaoCadastro" component={ConfirmacaoCadastro} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="ErroEmail" component={ErroEmail} options={{ headerShown: false }} />
      <Stack.Screen name="ErroSenha" component={ErroSenha} options={{ headerShown: false }} />
      <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="CadastroDespesa" component={CadastroDespesa} options={{ headerShown: false }} />
      <Stack.Screen name="AddExpense" component={AddExpense} options={{ headerShown: false }} />
      <Stack.Screen name="ConfirmacaoDespesa" component={ConfirmacaoDespesa} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
