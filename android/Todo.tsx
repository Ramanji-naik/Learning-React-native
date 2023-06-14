import React, { useState } from "react";
import {
    Dimensions, FlatList, StyleSheet, Text,
    TextInput, TouchableOpacity, View,
} from "react-native"

const { width } = Dimensions.get('screen')
const Todo = () => {

    const [input, setInput] = useState()
    const [fooditems, setFooditems] = useState([])
    const HandleChangeText = (val) => {
        // console.log('val====',val)
        setInput(val)
    }
    const HandleAddText = () => {
        //console.log('@HandleAddText==')
        const FoodstoreArray = fooditems;
        FoodstoreArray.push(input);
        setFooditems(FoodstoreArray);
        setInput('');
    }
    const HandleRemoveItem = (removeditem) => {
        const NonremovedFood = fooditems.filter((eachfooditem) => {
            //  console.log("@kldjdhfkdgh==",removeditem)
            //  console.log("eachfooditem==",eachfooditem)
            if (eachfooditem === removeditem) {
                return false;
            } else {
                return true
            }
         });
        setFooditems(NonremovedFood)
    }
    const HandleRenderFoodData = ({ item, index }) => {
        return (
            //console.log("@HandleRenderFoodData==")
            <View style={Styles.viewstyle}>
                <Text> {item} </Text>
                <Text> {index} </Text>
                <TouchableOpacity onPress={() => HandleRemoveItem(item)} >
                    <Text style={{ color: 'red' }}> delete </Text>
                </TouchableOpacity>
            </View>
        )

    }

    return (
        <View >

            <Text numberOfLines={2} style={Styles.viewtext}> Item : {input} </Text>
            <TextInput
                style={Styles.container}
                placeholder="write here"
                onChangeText={HandleChangeText}
                value={input}
            />
            <TouchableOpacity onPress={HandleAddText}>
                <Text style={Styles.touchStyle}> Add to list</Text>
            </TouchableOpacity>

            <FlatList
                data={fooditems}
                extraData={fooditems}
                renderItem={HandleRenderFoodData}
                keyExtractor={(item) => item}
            />
        </View>

    )
}
const Styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        width: width,
        margin: 20,
        marginLeft: 20

    },
    touchStyle: {
        textAlign: 'center',
        borderWidth: 2,
        marginLeft: 100,
        marginRight: 100,
        backgroundColor: 'green',
        color: 'white',
        borderRadius: 20

    },
    viewtext: {
        fontSize: 20,
        marginLeft: 30,
        fontWeight: 'bold',
    },
    viewstyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 20,
        marginBottom: 10
    }
})

export default Todo;