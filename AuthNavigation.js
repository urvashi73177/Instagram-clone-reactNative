import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { SignedInStack, SignedOutStack } from "./screens/Navigation";
import firebase from "firebase/compat";

const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const userHandler = user =>
    user ? setCurrentUser (user) : setCurrentUser(null);
  useEffect(() => {
    return firebase.auth().onAuthStateChanged(user => userHandler(user));
  }, []);
  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>;
};

export default AuthNavigation;
