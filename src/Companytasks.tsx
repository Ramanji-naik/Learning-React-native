import React from "react";
import { FlatList, Text, View } from 'react-native';
const dummayData = [
  {
    name: 'chinna',
    id: '1'
  },
  {
    name: 'ram',
    id: '2'
  },
  {
    name: 'avin',
    id: '3'
  },
  {
    name: 'lok',
    id: '4'
  }
]
const Companytasks = () => {
  const renderCard = ({ item, index }) => {
    return <View key={item.id + index}>
      <Text>{item.name}</Text>
    </View>
  };
  return (
    <View>
      <Text>hgdjfhga</Text>
      <FlatList
        data={dummayData}
        keyExtractor={(item) => item.id}
        extraData={dummayData}
        renderItem={renderCard}
      />

    </View>
  )
}
export default Companytasks;