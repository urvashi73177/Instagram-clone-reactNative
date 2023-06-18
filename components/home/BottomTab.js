import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { POSTS } from "../../data/Posts";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
// import { AntDesign } from '@expo/vector-icons';
import { Divider } from "@rneui/themed";

export const BottomTabsIcons = [
  {
    name: "home",
    active: <MaterialCommunityIcons name="home" size={30} color="black" />,
    inactive: <AntDesign name="home" size={30} color="black" />,
  },

  {
    name: "search",
    inactive: <AntDesign name="search1" size={30} color="black" />,
    active: <FontAwesome name="search" size={30} color="black" />,
  },

  {
    name: "add",
    active: <MaterialIcons name="add-circle" size={30} color="black" />,
    inactive: <Ionicons name="add" size={30} color="black" />,
  },

  {
    name: "reels",
    active: <MaterialCommunityIcons name="play-box" size={30} color="black" />,

    inactive: (
      <MaterialCommunityIcons name="play-box-outline" size={30} color="black" />
    ),
  },

  {
    name: "Profile",
    active: <FontAwesome name="user" size={30} color="black" />,
    inactive: <AntDesign name="user" size={30} color="black" />,
  },
];
const BottomTab = ({ icons }) => {
  const [activeTabs, setActiveTabs] = useState("Home");

  const Icon = ({ icon }) => {
    return (
      <TouchableOpacity onPress={() => setActiveTabs(icon.name)}>
        <Text>{activeTabs === icon.name ? icon.active : icon.inactive}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />

      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
  wrapper: {
    position: "absolute",
    width: "100%",
    bottom: "3%",
    zIndex: 999,
    backgroundColor: "#ffff",
  },
});

export default BottomTab;
