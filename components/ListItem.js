import React,{useState,useEffect, useRef} from 'react'
import {
    View,
    TouchableOpacity,
    Button,
    Image,
    Text,
    StyleSheet,
    CheckBox
} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const ListItem = ({item,deleteItem,checkItem,index}) => {
    

    const [items, setItems] = useState({})
    const textRef = useRef(null)
    
    useEffect(() => {
       setItems(item)
    }, [])

    var check = "#d3d3d3"
   

    if(item.check){
        console.log('changed color')
        check = "royalblue"
        textStyle = {
            ...styles.ListItemText, textDecorationLine:'line-through'
        }
    }
    else{
        textStyle = {
            ...styles.ListItemText
        }
    }

    styles.checkStyle = null

    const checkItems = (index) =>{
        const checked = checkItem(index)
        setItems(checked)
    }


    return (
        
        <TouchableOpacity style={styles.ListItem,{flexDirection: 'row',alignItems:'center',height:60,justifyContent:'space-between',paddingLeft: 20}}>
            
            <Text ref={textRef} style={textStyle}>{item.text}</Text>


            <TouchableOpacity style={styles.Icons}
            onPress={()=>checkItems(index)}
            >
            <Icon
            name="check"
            size={20}
            color={check}
            /></TouchableOpacity>
            <TouchableOpacity style={styles.Icons}
            onPress={()=>deleteItem(item.id)}
            >
            <Icon 
            name="remove" 
            size={20} 
            color="firebrick"
            />
            </TouchableOpacity>
           
        </TouchableOpacity>
      
    )
}

const styles = StyleSheet.create({

    ListItem:{
         backgroundColor: '#fff',
    },
    ListItemText:{
        fontWeight:'bold',
        color: 'black',
        overflow: 'hidden',
        width: 300,
    },
    ListItemChecked:{
        textDecorationLine:'line-through'
    },
    Icons:{
        flexDirection:'row',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: 50,
 

    }
})
export default ListItem
