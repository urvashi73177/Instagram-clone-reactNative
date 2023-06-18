import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    Image, Animated
  } from "react-native";
  import React from "react";
  import Header from "./../components/home/Header";
  import Story from "../components/home/Story";
  import Post from "../components/home/Post";
  import { POSTS } from "../data/Posts";
  import {AnimatedValue} from ".././components/home/Post"
import BottomTab, { BottomTabsIcons } from "../components/home/BottomTab";
  
  const HomeScreen = () => {
    const animatedValue = new Animated.Value(0);
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <Story />
        <ScrollView
        onScroll={Animated.event(
          [{nativeEvent:{contentOffset:{y:animatedValue}}}],
          {useNativeDriver:false}
        )}
        >
          {POSTS.map((post, index) => (
            <Post post={post} key={index} animatedValue={animatedValue} />
          ))}
        </ScrollView>

        {POSTS.map((post, index) => (
           <BottomTab icons={BottomTabsIcons}
        post={post} key={index}
           />
          ))}
        
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      // backgroundColor:'black',
      flex: 1,
    },
  });
  
  export default HomeScreen;
  