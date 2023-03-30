import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Estilos from './Estilos'; // Importa as constantes de estilo do arquivo Estilos.js
import TelaLogin from './TelaLogin';


const TelaPrincipal = () => {
  const users = [
    {
      nome: 'Usuário 1',
      função: 'Médico(a) Veterinário',
      disponibilidade: 'Segunda a Sexta, 8h às 17h',
      icon: require('./img/profile.png'),
    },
    {
      nome: 'Usuário 2',
      função: 'Auxíliar tosador',
      disponibilidade: 'Segunda a Sexta, 9h às 18h',
      icon: require('./img/profile.png'),
    },
    {
      nome: 'Usuário 3',
      função: 'Tosador',
      disponibilidade: 'Segunda a Sexta, 10h às 19h',
      icon: require('./img/profile.png'),
    },
    {
      nome: 'Usuário 4 ',
      função: 'Tosador',
      disponibilidade: 'Segunda a Sexta, 10h às 19h',
      icon: require('./img/profile.png'),
    },
    {
      nome: 'Usuário 5',
      função: 'Tosador',
      disponibilidade: 'Segunda a Sexta, 10h às 19h',
      icon: require('./img/profile.png'),
    },
  ];
  return (
  <View style={Estilos.container_u}>
      {users.map((user, index) => (
      <View key={index}>
        <View style={Estilos.iconeContainer}>
          <Image source={require('./img/horario.png')} style={Estilos.icone} /> 
        </View>
      <Image source={require('./img/profile.png')} style={Estilos.icon} />
      <Text style={Estilos.nome}>{user.nome}</Text>
      <Text style={Estilos.função}>{user.função}</Text>
      <Text style={Estilos.disponibilidade}>{user.disponibilidade}</Text>
      {index < users.length - 1 && <View style={Estilos.linha} />}
  </View>
))}
    </View>
  );
};

export default TelaPrincipal;
