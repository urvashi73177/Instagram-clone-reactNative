import { View, Text, Image, StyleSheet, Animated } from "react-native";
import React from "react";
import { Divider } from "@rneui/themed";
const Post = ({ post , animatedValue}) => {
    const HEADER_MAX = 500;
    const HEADER_MIN = 50;
    const animateHeaderHeight=animatedValue.interpolate({
      inputRange:[0, HEADER_MAX-HEADER_MIN],
      outputRange:[HEADER_MAX, HEADER_MIN],
      extrapolate:'clamp'
  })
  return (
    <Animated.View style={{ marginBottom: 30, height: animateHeaderHeight }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
    </Animated.View>
  );
};

export const PostHeader = ({ post }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={{ uri: post.profile_picture }} style={styles.story} />
        <Text style={{ color: "black", fontWeight: 700, marginLeft: 5 }}>
          {post.user}
        </Text>
      </View>
      <Text style={{ fontWeight: 900 }}>...</Text>
    </View>
  );
};

const PostImage = ({ post }) => {
  return (
    <View style={{ width: "100%", height: 450 }}>
      <Image
        source={{ uri: post.imageUrl }}
        style={{ height: "100%", resizeMode: "cover" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1.6,
    flexDirection: "row",
    // marginLeft:6
  },
});

export default Post;
