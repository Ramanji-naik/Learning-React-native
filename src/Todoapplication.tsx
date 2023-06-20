import React, { useState } from "react";
import { Alert, Dimensions, FlatList, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { View } from 'react-native';

const {width}=Dimensions.get('screen');
const Todoapplication=()=>{
    const [searchfood,setSearchfood]=useState('')
    const [foodlist,setFoodlist]=useState([])
    
    const handleaddtocart=()=>{
         const Addedfoodarray=foodlist
         Addedfoodarray.push(searchfood)
         setFoodlist(Addedfoodarray)
         setSearchfood('')
     }

     const handledeleteitem=(removeditem)=>{
          const AfterRemovedFood=foodlist.filter(previouseachfood => previouseachfood !== removeditem) //here not match data store in AfterRemovedFood
           setFoodlist(AfterRemovedFood)
     }

     const handlerenderdata=({item,index})=>{
           return(
            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:30}}>
            <Text>{item}</Text>
            <Text>{index}</Text>
            <TouchableOpacity onPress={()=>handledeleteitem(item)}>
            <Text>delete</Text>
            </TouchableOpacity>
            </View>
           )
     }
     
    return(
      <View style={Style.viewstyle}>
        <TextInput
        style={Style.textinput}
        placeholder="search here"
        onChangeText={ text => setSearchfood(text)}
        value={searchfood}
        />
       <TouchableOpacity 
         onPress={handleaddtocart} >
        <Text  style={Style.textstyle}> Add to Cart </Text>
       </TouchableOpacity>
    
       <FlatList
       data={foodlist}
       extraData={foodlist}
       renderItem={handlerenderdata}
       keyExtractor={item=>item}
       />
       
       
      </View>
    )
}
const Style=StyleSheet.create({
    viewstyle:{
        margin:30,
        marginTop:50

    },
    textinput:{
      borderWidth:1,
      textAlign:'center',
      fontSize:20,
      //width:300
    },
    textstyle:{
     fontSize:20,
     textAlign:'center',
     marginTop:20,
     color:'white',
     backgroundColor:'gray',
     width:200,
     marginLeft:40
    }
})
export default Todoapplication;