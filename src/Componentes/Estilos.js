import {StyleSheet} from 'react-native';

const Estilos = StyleSheet.create({
    
    //areas
    area_fundo:{
    flex: 1,
    backgroundColor: 'grey',    
    },
    area_logo:{
    width:140, 
    height:55 
    },

    //const de estilo - tela login; tela Cadastro
    container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    },
    title:{
    justifyContent: 'center', 
    alignItems: 'center', 
    fontSize: 24, 
    marginBottom: 40,
    color: 'green'
    },
    input: {
    width: '60%',
    height: 40,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'transparent',
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: '10px',
    boxShadow : '2px 2px 5px green'
    },
    button: {
    paddingVertical: 2,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'left',
    },
    buttonText: {
    color: 'green',
    fontSize: 16,
    },
    buttonText2: { //esqueci minha senha
    color: 'green',
    fontSize: 12,
    height: 40,
    marginRight : '110px'
    },
    background: {
    //flex: 1,
    paddingVertical: 10,
    resizeMode: 'cover',
    },
    mainText: {
    fontSize: 18,
    marginVertical: 20,
   
    }, //Tela principal

    slider: {
    width: 50,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'black',
    marginTop: 50,
    },
    sliderEnabled: {
    backgroundColor: 'green',
    },


    // Tela Inicial Funcionários

    container_u: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    },
    icon: { //foto de perfil
    marginTop: 30,
    height: 50,
    width: 50,
    marginRight: 10, // Adiciona um margin right para separar o ícone do texto
    },
    usuario: {
    display: 'flex',
    flexDirection: 'row', // Muda a direção do flex para linha
    alignItems: 'center', // Centraliza os itens verticalmente
    marginBottom: 20, // Adiciona uma margin bottom para separar os usuários
    },
    nome: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    },
    disponibilidade: {
    fontSize: 14,
    marginTop: 5,
    },
    função:{
    fontSize: 14,
    marginTop: 5,            
    },
    linha: { //linha que separa os funcionários
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginTop: 10,
    marginBottom: 10,
    },
    iconeContainer: { //icone de contato funcionários
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    },
    icone: { //icones funcionários (superior)
    position: 'absolute'
    } // Adiciona um margin right para separar o ícone do texto
    });

export default Estilos;