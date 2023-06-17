import React, { useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

const { width } = Dimensions.get('screen')
const Input = () => {
    const [food, setFood] = useState('')
    const [todos, setTodos] = useState([])
    const ChangeHandler = (foodNmae) => {
        setFood(foodNmae)
    }

    const SubmitHandler = () => {
        const addedFoodArray = todos;
        addedFoodArray.push(food)
        setTodos(addedFoodArray);
        setFood('')
    }
    const handleOnDeleteFood = (removeFood) => {
        //console.log("todos", todos);

        const AfterRemovedFood = todos.filter((previousEachFood) => {
            if(previousEachFood === removeFood){
                return false;
            } else{
                return true;
            }
        });
        setTodos(AfterRemovedFood );
        
        //console.log("removedFood", removedFood);
    }

    const RenderItem = ({ item, index }) => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                <Text>
                    {item}
                </Text>
                <Text>
                     {index}
                </Text>
                <TouchableOpacity onPress={() => handleOnDeleteFood(item)}>
                    <Text>
                        Delete Food
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }
    console.log("foods----------------todos", todos);
    return (
        <View>

            <Text numberOfLines={2}
                style={Styles.container}> Item:{food}
            </Text>

            <TextInput
                style={Styles.textinput}
                placeholder="Enter food Task"
                onChangeText={ChangeHandler}
                value={food}
                
            />
            <TouchableOpacity onPress={SubmitHandler}
                style={{ margin: 20, borderWidth: 2 }}>
                <Text style={Styles.touchabletext}>
                    Add to List
                </Text>
            </TouchableOpacity>

            <FlatList
                data={todos}
                extraData={todos}
                renderItem={RenderItem}
                keyExtractor={(item) => item}
            />
        </View>
    )
}
const Styles = StyleSheet.create({
    container: {
        fontSize: 20,
        margin: 20,
        fontWeight: 'bold',
    },
    textinput: {
        borderWidth: 2,
        width: width,

    },
    touchabletext: {
        textAlign: 'center',
        backgroundColor: 'green',
        color: "white",
        borderRadius: 10

    }
})
export default Input;