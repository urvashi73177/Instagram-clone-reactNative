import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Alert
} from "react-native";
import React, {useState} from "react";
import {Formik} from "formik"
import * as Yup from'yup';
import validator from 'email-validator'
import firebase from "../.././firebase";

const LogInForm = ({navigation}) => {
  const LogInFormSchema = Yup.object().shape({

    email: Yup.string().email().required('An email is required'),
    password: Yup.string().required().min(8, 'Password must be at least 8 characters')
  })

  const onLogin = async(email, password)=>{
    try{
        await firebase.auth().signInWithEmailAndPassword(email, password)
        console.log('firebase login successful', email , password) 
    }catch(err){
      Alert.alert(err.message + '\n\n...What would you like to do next?' [
        {
          text:'OK',
          onPress:()=>console.log('OK'),
          style:'cancel',

        },{
          text:'Sign Up', onPress:()=>navigation.push('SignUpScreen')
        }
      ])
    }
  }
  return (
    <View style={styles.wrapper}>
      <Formik
      initialValues={{email:'', password:'',}}
      onSubmit={(values)=>onLogin(values.email, values.password)}
      validationSchema={LogInFormSchema}
      validateOnMount={true}
      >

        {({handleChange, handleBlur,handleSubmit,values,  isValid})=>(
          
        <>
        
        
      <View style={[styles.inputField,
        { borderColor:values.email.length < 1 || validator.validate(values.email)? '#CCC':'red'}]}>
        <TextInput
          placeholder="Phone number, username, email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}


/>
      </View>
      <View style={[styles.inputField,
      {
        borderColor: values.password.length < 1 || values.password.length < 6 ?'#CCC':'red'
      }
      ]}>
        <TextInput
          placeholder="password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          textContentType="password"
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
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
        <Text style={styles.buttonText}>LogIn</Text>
      </Pressable>
      <View style={styles.signUpContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.push('SignUpScreen')}>
          <Text style={{ color: "#6BB0F5" }}> Sign Up</Text>
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
  button:(isValid)=>( {
    backgroundColor: isValid? "#0096F6": '#9ACAF7',
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

export default LogInForm;
