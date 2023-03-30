import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from './TelaLogin';
import Cadastro from './Cadastro';
import RecuperarSenha from './RecuperaSenha';
import TelaPrincipal from './TelaPrincipal';
import Cadastro_emp from './Cadastro_emp';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="RecuperarSenha" component={RecuperarSenha} />
        <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
        <Stack.Screen name="Cadastro_emp" component={Cadastro_emp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



