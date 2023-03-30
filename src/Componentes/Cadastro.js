import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Estilos from './Estilos';
import TelaLogin from './TelaLogin';

export default function Cadastro() {
  return (
    <View style={Estilos.container}>
      <Text style={[Estilos.title, { color: 'green' }]}>Cadastro Cliente</Text>
      <TextInput
        placeholder="Nome"
        style={Estilos.input}
      />
      <TextInput
        placeholder="Cpf"
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
        placeholder="Pet"
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
