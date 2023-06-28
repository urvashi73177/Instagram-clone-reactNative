import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import SingUpFrom from ".././components/signUpScreen/SingUpForm";

const INSTAGRAM_LOGO =
  "https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?w=1060&t=st=1686680847~exp=1686681447~hmac=4e9521171263206e3cffe29abbad51e2f78e46b670e72ab2e755784b315abb55    ";

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100 }} />
      </View>
      <SingUpFrom navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },

  logo: {
    alignItems: "center",
    marginTop: 60,
  },
});

export default SignUpScreen;
