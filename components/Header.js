import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons'
import Fontisto from 'react-native-vector-icons/dist/Fontisto'

 function Header() {

    return (
        <View style={styles.Header}>
            <Fontisto name="react" size={25} color="white" style={styles.React}/>
            <Text style={{fontSize: 20, color: '#fff'}}>Todo RN</Text>
            <Icon name="ios-arrow-dropdown" size={25} color='white' style={{marginLeft: 20}} />
        </View>
    )
}

const styles = StyleSheet.create({

    Header:{
        flexDirection: 'row',
        backgroundColor: 'royalblue',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    React: {
        
    }
    


})

export default Header;
