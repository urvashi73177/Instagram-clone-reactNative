import { View, Text, Animated } from "react-native";
import {useRef} from "react"
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";
import SignedInStack from "./screens/Navigation";
import AuthNavigation from "./AuthNavigation";

export default function App() {
  return <AuthNavigation/>
  // return <HomeScreen/>
  // return <NewPostScreen/>

}
