import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

const Counter = () => {

    const [counter, setCounter] = useState(0)
    const incrementfunction=()=>setCounter(counter+1)
    const decrementfunction=()=>setCounter(counter-1)
        
            
        
    
    
    return (
        <View>

           <Text>counter:{counter}</Text>
            <TouchableOpacity
                onPress={incrementfunction}>
                <Text>increment</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={decrementfunction}>
                <Text>decrement</Text>
            </TouchableOpacity>
        </View>

    )
}
export default Counter;