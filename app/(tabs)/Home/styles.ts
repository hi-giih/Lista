import { Button, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#FFFFF',
      padding: 24
    },
  
    evento:{
      color:'#1E88E5',
      fontSize: 20, 
    },

    texto:{
      color: '#6B6B6B',
      fontSize: 15,
    },

    input:{
      backgroundColor:'#F5F5F8',
      height: 50,
      borderRadius: 5,
      color: '#30YY10',
      padding:16,
      fontSize: 16,
      flex: 1,
      marginRight: 12,
      marginBottom: 25,
    },

    buttonText:{
      color: '#FFF',
      fontSize: 24
    },

    button:{
      width: 46,
      height: 46,
      borderRadius: 5,
      backgroundColor: '#43A047',
      alignItems: 'center',
      justifyContent: 'center'
    },

    forms: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 10
    },

    texoListaVazia: {
      color: "#9E9E9E"
    }

  
  })