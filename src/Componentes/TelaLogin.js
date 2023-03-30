import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Switch } from 'react-native';
import Estilos from './Estilos';

export default function TelaLogin({ navigation }) {

  const [isEnabled, setIsEnabled] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('white');

  const toggleSwitch = () => { //slider que define a cor de fundo
    setIsEnabled((previousState) => !previousState);
    setBackgroundColor((previousState) => (previousState === 'black' ? 'white' : 'black'));
  };

  return (
    <View style={[Estilos.container, { backgroundColor: backgroundColor }]}>
      <Text style={Estilos.title}>Login</Text>
      <Switch
        trackColor={{ false: 'grey', true: 'white' }}
        thumbColor={isEnabled ? 'white' : 'green'}
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{ transform: [{ scaleX: 1.0 }, { scaleY: 1.0 }], position: 'absolute', top: 10, right: 10 }}// posição do switch
      />

      <TextInput placeholder="Email" style={Estilos.input} />
      <TextInput placeholder="Senha" secureTextEntry={true} style={Estilos.input} />

      <TouchableOpacity style={Estilos.button} onPress={() => navigation.navigate('RecuperarSenha')}>
        <Text style={Estilos.buttonText2}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Estilos.button} onPress={() => navigation.navigate('TelaPrincipal')}>
        <Text style={Estilos.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Estilos.button} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={Estilos.buttonText}>Cadastro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={Estilos.button} onPress={() => navigation.navigate('Cadastro_emp')}>
        <Text style={Estilos.buttonText}>Cadastro Empresa</Text>
      </TouchableOpacity>
    </View>
  );
}
