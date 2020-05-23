

import React, { useState, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import Axios from 'axios'
import Header from './components/Header'
import ListItem from './components/ListItem'


const App = () => {
  const [items,setItems] = useState([
  {id: Math.random(0,5), text: 'Spinach', check:false},
  {id: Math.random(0,5), text: 'Brocolly', check:false},
  {id: Math.random(0,5), text: 'Raddish', check:false},
])
const [newItem, setNewItem] = useState('')
const [posts,setPosts] = useState([])
const [loading,setLoading] = useState(true)
const refContainer = useRef(null);

const deleteItem = (id) =>{
  setItems(prevItems => {
    return prevItems.filter(item=>item.id != id)
  })
}

const checkItem = (index) =>{
var checked = null
  setItems(prevItems=>{
    prevItems[index].check = !prevItems[index].check
    checked = {...prevItems[index]}
    return prevItems
  })
  return checked

}

const addItem = () =>{
  setItems(prevItems => {
    return [{id: Math.random(0,5),text:newItem},...prevItems]});
    setNewItem(null)
}



  return (
    <>
   
    <Header/>
    <View style={styles.ItemContainer}>
    
      
      <View>
      <FlatList
      style={styles.flatList}
      data={items}
      keyExtractor = {(item, index) => index.toString()}
      renderItem={(item)=><ListItem
      item={item.item}
      index={item.index}
      deleteItem={deleteItem}
      checkItem={checkItem}
      />}
      />
   

      <View style={styles.InputView} >
      <TextInput style={styles.TextInput} value={newItem} onChangeText={text=>{setNewItem(text)}}/>

      <TouchableOpacity>
        <View style={styles.ButtonOuterView}>

          <TouchableOpacity style={styles.ButtonInnerView}
          onPress={(newItem)? addItem: null}
          >
            <Text
            
            style={{color: '#fff'}}
            >Add Item</Text>

          </TouchableOpacity>

        </View>
      </TouchableOpacity>

      </View>
      </View>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  ItemContainer: {
    flexDirection:'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingBottom: 60,
  },

  InputView:{
    padding: 15,
  },

  TextInput:{
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#841584',
    marginBottom: 15,
    paddingHorizontal: 10,
  },

  ButtonInnerView:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'dodgerblue',
  },

  ButtonOuterView:{
    backgroundColor: '#fff',
    alignItems: 'center',
  }



});

export default App;
