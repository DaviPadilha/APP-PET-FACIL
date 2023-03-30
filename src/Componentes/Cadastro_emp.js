import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Estilos from './Estilos';
import TelaLogin from './TelaLogin';

export default function Cadastro_emp() {
  return (
    <View style={Estilos.container}>
      <Text style={[Estilos.title, { color: 'green' }]}>Cadastro Empresa</Text>
      <TextInput
        placeholder="Nome"
        style={Estilos.input}
      />
      <TextInput
        placeholder="Cnpj"
        style={Estilos.input}
      />
      <TextInput
        placeholder="Endereço"
        style={Estilos.input}
      />
      <TextInput
        placeholder="Cidade"
        style={Estilos.input}
      />
      <TextInput
        placeholder="Telefone"
        style={Estilos.input}
      />
      <TextInput
        placeholder="E-mail"
        style={Estilos.input}
      />
      <TouchableOpacity 
        style={Estilos.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={Estilos.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
