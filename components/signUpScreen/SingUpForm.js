import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import validator from "email-validator";
// import firebase from 'firebase/app';
import { firebase, db } from "../.././firebaseTest";
// import db from "../.././firebaseTest"

const SignUpForm = ({ navigation }) => {
  const SignUpFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    password: Yup.string()
      .required()
      .min(8, "Password must be at least 8 characters"),
  });

  const getRandomProfilePicture = async () => {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data.results[0].picture.large;
  };
  const onSignUp = async (email, password, username) => {
    try {
      const authUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log("Firebase user created successfully", email, password);

      db.collection("users")
        .doc(authUser.user.email)
        .set({
          owner_id: authUser.user.uid,
          username: username,
          email: authUser.user.email,
          profile_picture: await getRandomProfilePicture(),
        });
    } catch (err) {
      Alert.alert(err.message);
    }
  };
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "", username: "" }}
        onSubmit={(values) =>
          onSignUp(values.email, values.password, values.username)
        }
        validationSchema={SignUpFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || validator.validate(values.email)
                      ? "#CCC"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholder="Email"
                autoCapitalize="none"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                // keyboardType="email-address"
                textContentType="email"
                autoFocus={true}
              />
            </View>
            <View style={styles.inputField}>
              <TextInput
                placeholder="Username"
                autoCapitalize="none"
                // keyboardType="name"
                textContentType="username"
                autoFocus={true}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.name}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.password.length < 1 ||
                    values.password.length < 6 ||
                    validator.validate(values.password)
                      ? "#CCC"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholder="password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
              <Text style={{ color: "#6BB0F5" }}>Forgot Password?</Text>
            </View>
            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
            <View style={styles.signUpContainer}>
              <Text>Already have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.goBack("LoginScreen")}
              >
                <Text style={{ color: "#6BB0F5" }}> LogIn</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
  },
  wrapper: {
    marginTop: 80,
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  }),
  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },
  signUpContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
});

export default SignUpForm;
