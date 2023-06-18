import { View, Text,SafeAreaView,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import FormikPostUploader from './FormikPostUploader';



const AddNewPost = ({navigation}) => {
  return (
   <View style={styles.container}>
    <Header navigation={navigation}/>
    <FormikPostUploader navigation={navigation}/>
   </View>
  )
}

const Header = ({navigation})=>{
    return(
        <View style={styles.headerContainer}>
        <TouchableOpacity onPress={()=>navigation.push('HomeScreen')}>
        <Text><Ionicons name="chevron-back" size={24} color="black" /></Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>New Post</Text>
        <Text></Text> 
    </View>
    )
}

const styles = StyleSheet.create({
container:{
    marginHorizontal:10,

},
headerContainer:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
headerText:{
    fontWeight:700,
    fontSize:20,
    marginRight:25
}
})

export default AddNewPost