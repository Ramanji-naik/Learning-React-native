import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native"
import Todo from "../Todo";

const TodoApp=()=>{
    return(
        <View style={Styles.container}>
          <Text style={Styles.textstyle}>
            TODO APPLICATION:
          </Text>
        < Todo />
         </View> 
    )
}
const Styles=StyleSheet.create({
  
  container:{
    alignItems:'center'
   },
   textstyle:{
    fontSize:30,
    color:'red',
  }
})
export default TodoApp;
