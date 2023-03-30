import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Estilos from './Estilos';
import TelaLogin from './TelaLogin';

export default function RecuperarSenha() {
  return (
    <View style={Estilos.container}>
      <Text style={[Estilos.title, { color: 'black' }]}>Recuperar senha</Text>
      <TextInput
        placeholder="Digite sua última senha"
        secureTextEntry={true}
        style={Estilos.input}
      />
      <TextInput
        placeholder="Digite sua nova senha"
        secureTextEntry={true}
        style={Estilos.input}
      />
      <TextInput
        placeholder="Confirme sua nova senha"
        secureTextEntry={true}
        style={Estilos.input}
      />
      <TouchableOpacity 
        style={Estilos.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={Estilos.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}
