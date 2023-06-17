import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, FlatList, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const SearchComponent = () => {

    const [renderdata, setRenderdata] = useState([])
    const [searcheddata, setSearcheddata] = useState('')
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(apiResponse => apiResponse.json())
            .then(responceresult => setRenderdata(responceresult.products))
            .catch(error => console.warn(error))
    }, [])
    
    const handlerenderdata = ({ item }) => {
        return <Text>{item.title}</Text>
    }

    const handlesearchremove = () => {
        return setSearcheddata('')
    }
    const renderemptydata =()=>{
        return <Text style={{fontSize:20,marginLeft:20}}>No data found </Text>
    }

    const filteredData = renderdata.filter(item =>{
        return item.title.toLowerCase().includes(searcheddata.toLowerCase());
    })
    return (
        <View>
            <View style={Style.viewstyle}>
                <FontAwesome5 name={'search'} size={20} style={Style.searchstyle} />
                <TextInput
                    style={Style.textinput}
                    placeholder="search here"
                    onChangeText={text => setSearcheddata(text)}
                    value={searcheddata}

                />
                {searcheddata && searcheddata.length > 0 &&
                    <TouchableOpacity onPress={handlesearchremove}>
                        <FontAwesome5 name={'times'} size={20} style={Style.timesstyle} />
                    </TouchableOpacity>
                }
            </View>
            {filteredData.length>0 && searcheddata.length > 2 ? 
               ( <FlatList
                    data={filteredData}
                    extraData={filteredData}
                    renderItem={handlerenderdata}
                    keyExtractor={(item) => item.id.toString()}
                />
                ):
                (
                    renderemptydata()
                )
            }
            
        </View>

    )
}
const Style = StyleSheet.create({
    viewstyle: {
        flexDirection: 'row',
        margin: 20,
        borderWidth: 2,
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'space-between',

    },
    textinput: {
        fontSize: 20,
        width: 250,
    },
    searchstyle: {
        marginLeft: 10

    },
    timesstyle: {
        marginLeft: 10

    }

})
export default SearchComponent;