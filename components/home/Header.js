import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useRef } from "react";
import { Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {firebase} from '../.././firebaseTest'

const Header = ({navigation}) => {
  const handleSignOut = async()=>{
    try{
      await firebase.auth().signOut()
      console.log('Signed oUT')

    }catch(error){
      console.log(error)
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => {handleSignOut()}}>
        <Image
          style={{ width: 100, height: 80 }}
          source={require("../../asset/header-logo.png")}
        />
      </TouchableOpacity>

      <View style={styles.iconConatiner}>
        <TouchableOpacity onPress={()=>navigation.push('NewPostScreen')}>
          <Octicons
            name="diff-added"
            size={24}
            color="black"
            style={styles.icon}

          />
        </TouchableOpacity>
        <TouchableOpacity>
        <AntDesign name="hearto" size={24} color="black" />
       
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadbadge}>
            <Text style={styles.unreadBadgeText}>2</Text>
          </View>
          <AntDesign
            name="message1"
            size={24}
            color="black"
            style={{ marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },

  logo: {
    color: "white",
    width: 100,
    height: 80,
    // resizeMode:'contain'
  },

  // logoo:{
  //     color:'white',
  //     width:100,
  //     height:70
  // },

  iconConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    // resizeMode:'contain'
  },
  unreadbadge: {
    backgroundColor: "red",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100, //brings the badge over the message icon
  },
  unreadBadgeText: {
    color: "white",
    fontWeight: 600,
  },
});

export default Header;
