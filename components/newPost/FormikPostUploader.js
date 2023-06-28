import { View, Text, TextInput, Image, Button } from "react-native";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Divider } from "@rneui/base";
import validUrl from "valid-url";
import { firebase, db } from "../.././firebaseTest";

const UploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(
    2200,
    `Caption has reached the maximum allowed characters`
  ),
});

const PLACEHOLDER_IMAGE =
  "https://www.signfix.com.au/wp-content/uploads/2017/09/placeholder-600x400.png";

const FormikPostUploader = ({ navigation }) => {
  const [thumbnail, setThumbnail] = useState(PLACEHOLDER_IMAGE);
  const [currentloggedUser, setCurrentLoggedUser] = useState(null);

  const getUserName = () => {
    const user = firebase.auth().currentUser;
    const unsubscribe = db
      .collection("users")
      .where("owner_uid", "==", user.uid)
      .limit(1)
      .onSnapshot((snapshot) =>
        snapshot.docs.map((doc) => {
          setCurrentLoggedUser({
            username: doc.data().username,
            profilePicture: doc.data().profile_picture,
          });
        })
      );

    return unsubscribe;
  };

  console.log(currentloggedUser);

  useEffect(() => {
    getUserName();
  }, []);
  const uploadPostToFire = (imageUrl, caption) => {
    const unsubscribe = db
      .collection("users")
      .doc(firebase.auth().currentUser.email).collection("posts").add({
        imageUrl: imageUrl,
        // user: currentloggedUser.username,
        // profile_picture: currentloggedUser.profilePicture,
        owner_uid: firebase.auth().currentUser.uid,        caption: caption,        createdAt: firebase.firestore.FieldValue.serverTimestamp(),        likes: 0,        likes_by_users: [],
        comments: [],
      })
      .then(() => navigation.goBack());
    return unsubscribe;
  };

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => {
        uploadPostToFire(values.imageUrl, values.caption);
      }}
      validationSchema={UploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View style={{ margin: 20, flexDirection: "row" }}>
            <Image
              source={{
                uri: validUrl.isUri(thumbnail) ? thumbnail : PLACEHOLDER_IMAGE,
              }}
              style={{ width: 100, height: 100 }}
            />

            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                placeholder="write a caption"
                multiline={true}
                style={{ fontSize: 20 }}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            placeholder="Enter image Url"
            style={{ fontSize: 18 }}
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
            onChange={(e) => setThumbnail(e.nativeEvent.text)}
          />
          {errors.imageUrl && (
            <Text style={{ fontSize: 10, color: "red" }}>
              {errors.imageUrl}
            </Text>
          )}

          <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;
