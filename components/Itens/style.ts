import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor:'#F5F5F8',
        flexDirection: 'row',
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 5,

    },

    texto:{
        color: '#30YY10',
        flex: 1,
        fontSize: 16,
        marginLeft: 16,
    }, 
    
    buttonText:{
        color: '#FFF',
        fontSize: 24
      },
  
      button:{
        width: 46,
        height: 46,
        borderRadius: 5,
        backgroundColor: '#E53935',
        alignItems: 'center',
        justifyContent: 'center', 
      },

})