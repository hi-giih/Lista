import { StatusBar } from "react-native";
import Home from "./(tabs)/Home";

export default function App (){
    return(
    <>
        <StatusBar
            barStyle={'dark-content'}
            translucent
            backgroundColor={'transparent'}
        />
        <Home/>
        </>
    )
  }
  