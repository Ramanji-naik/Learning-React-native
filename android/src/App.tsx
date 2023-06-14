// import React from "react";
// import { StyleSheet, Text, TextInput, View } from "react-native"
// import Todo from "../Todo";

// const App=()=>{
//     return(
//         <View style={Styles.container}>
//           <Text style={Styles.textstyle}>
//             TODO APPLICATION:
//           </Text>
//         < Todo />
//          </View> 
//     )
// }
// const Styles=StyleSheet.create({
  
//   container:{
//     alignItems:'center'
//    },
//    textstyle:{
//     fontSize:30,
//     color:'red',
//   }
// })

import React from "react";
import { Text, View } from 'react-native';
import Companytasks from "./Companytasks";
const App=()=>{
  return(
   
    <Companytasks />
  )
}
export default App;