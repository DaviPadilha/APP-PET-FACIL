import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Feed from './src/Componentes';
import Estilos from './src/Componentes/estilos';


class app extends Component {
  render(){
      return(
        <View style = {Estilos.area_fundo}>
          <Feed/>    
            </View>         
      );
    }
  }

export default app;