import { Alert, FlatList, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import {styles} from './styles'
import { Itens } from "@/components/Itens";


export default function Home (){
  const [itens, setItens] = useState<string[]>([]);
  const [itemName, setItemName] = useState('');

  function handleItensAdd(){
    if(itens.includes(itemName)){
      return Alert.alert("Item já existe", 'Não é possivel adicionar o item, pois ele já existe na lista' );
    }
    setItens(prevState =>[...prevState, itemName]);
    setItemName(' ');
  }

  function handleItensRemove( name: string){
    return Alert.alert("Remover item", `Tem certeza que deseja remover o item ${name} da lista?`,
      [{
        text: 'Sim',
        onPress: () => setItens(prevState => prevState.filter(itens => itens !== name))
       },
       {
        text: 'Não',
        style: 'cancel'
       }
      ]
    )
  }

  return(
    
    <View style={styles.container}>
      <Text style={styles.evento}>Está é sua lista de Compras !! </Text>
      <Text style={styles.texto}>Preencha a lista para não esquecer os itens</Text>

    <View style={styles.forms}>
    <TextInput 
      style={styles.input}
      placeholder="Adicione um item a lista"
      placeholderTextColor={"#9E9E9E"}
      onChangeText={text => setItemName(text)}
      value={itemName}
    />
    <TouchableOpacity 
      style={styles.button}
      onPress={handleItensAdd}>
        <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
    </View>

    <FlatList
      data={itens}
      keyExtractor={item =>item}
      renderItem={({item}) => (<Itens
        key={item}
        name = {item}
        onRemove={()=>handleItensRemove(item)}/>)}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={()=>(<Text style={styles.texoListaVazia}>Nenhum item cadastrado na lista</Text>)}
    />

    </View>
  )
}

