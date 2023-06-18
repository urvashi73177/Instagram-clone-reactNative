import { View, Text, ScrollView, Image, StyleSheet, Animated } from "react-native";
import React,{useRef} from "react";
import { USERS } from "../../data/Users";
import Header from "./Header";

const Story = () => {

  return (
    <View style={
       styles.container
    
    }>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}
      >
        {USERS.map((story, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text>
              {story.user.length > 11
                ? story.user.slice(0, 10).toLocaleLowerCase() + "..."
                : story.user.toLocaleLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        marginBottom:13
    },
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#ff8501",
    marginLeft: 6,
  },

});

export default Story;
