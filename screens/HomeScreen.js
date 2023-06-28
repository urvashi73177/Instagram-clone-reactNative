import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  Animated,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "./../components/home/Header";
import Story from "../components/home/Story";
import Post from "../components/home/Post";
import { POSTS } from "../data/Posts";
import { AnimatedValue } from ".././components/home/Post";
import BottomTab, { BottomTabsIcons } from "../components/home/BottomTab";
import { db } from "../firebaseTest";

const HomeScreen = ({ navigation }) => {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    db.collectionGroup("posts").onSnapshot(snapshot => {
      setPost(snapshot.docs.map(doc => doc.data()));
    });
  }, []);
  const animatedValue = new Animated.Value(0);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header navigation={navigation} />
        <Story />
        <ScrollView>
          {posts.map((post, index) => (
            <Post post={post} key={index} animatedValue={animatedValue} />
          ))}
        </ScrollView>
      </ScrollView>
      <BottomTab icons={BottomTabsIcons} />
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
