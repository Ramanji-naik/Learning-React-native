import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from 'react-native';

const Autoscroll=()=>{

    const [digits,setDigits]=useState()
    useEffect(()=>{
        const updatedDigits=[];
        for(let i=0;i<=100;i++){
            updatedDigits.push(i);
        }
        setDigits(updatedDigits);
    },[])

    const renderitem=({item,index})=>{
          return(<View>
            <Text key={item.id}>{item}</Text>
          </View>)
    }
    return(
        <View>
            <FlatList
            data={digits}
            extraData={digits}
            renderItem={renderitem}
            keyExtractor={(item)=>item.id}
            />
        </View>

    )
}
export default Autoscroll;