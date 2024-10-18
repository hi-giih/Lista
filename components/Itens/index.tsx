import { View,Text, TouchableOpacity } from "react-native";

import { styles } from "./style";

type Props = {
    name: string;
    onRemove: () =>void
}

export function Itens({name, onRemove}:Props){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>
               {name}
            </Text>
            <TouchableOpacity 
                onPress={onRemove}
                style={styles.button}>
        <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        </View>
    )

}