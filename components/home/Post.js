import { View, Text, Image, StyleSheet, Animated, TouchableOpacity } from "react-native";
import React,{useState} from "react";
import { Divider } from "@rneui/themed";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { POSTS } from "../../data/Posts";
const Post = ({ post} ) => {
  
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter/>
      <Likes post={post}/>
      <Captions post={post}/>
      <CommentSections post={post}/>
      <Comments post={post}/>
    </View>
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

const Likes = ({post})=>{
  return(
    <View style={{flexDirection:'row', marginTop:4 , marginLeft:5}}>
      <Text style={{color:'black', fontWeight:600}}>{post.likes.toLocaleString('en')} likes</Text>
    </View>

  )
  
}

const Captions = ({post})=>(
  < View style={{marginTop:8, marginLeft:5}}>
   <Text>
 <Text style={{fontWeight:'bold', marginLeft:6}}>{post.user}</Text>
 <Text> {post.caption}</Text>
  </Text>
  </View>
 


)

const PostFooter =()=>{

  const [like, setLike] = useState(false)

  const handleClick = () => {
    if(like==false){
      setLike(true)
    }else if(like==true){
      setLike(false)
    }
  
  }
  return(
    <View style={{flexDirection:'row'}}>
      <View style={styles.leftFooterContainer}>
      <TouchableOpacity onPress={handleClick}>
   {like?<MaterialCommunityIcons name="heart" size={24} color="red" />:<MaterialCommunityIcons name="heart" size={24} color="black" />} 
     </TouchableOpacity>
     <TouchableOpacity>
     <FontAwesome name="comment" size={24} color="black" />
     </TouchableOpacity>
     <TouchableOpacity>
     <Feather name="send" size={24} color="black" />
     </TouchableOpacity>
      </View>
      
    </View>
    
  )
 
}

const CommentSections = ({ post})=>{
  return(
    <View style={{marginTop:5}}>
{!!post.comments.length&&(
  <Text style={{color:'grey'}}> View {post.comments && post.comments.length > 1 ? "all": " "} {post.comments.length}{' '} {post.comments.length > 1 ? 'comments':'comment'}</Text>
) }

    </View>
  
  )
}
const Comments = ({post})=>(
  <>
  {post.comments.map((comment, index)=>(

<View key={index} style={{flexDirection:'row', marginTop:5}}>
  <Text>
  <Text style={{fontWeight:600}}>{comment.user}</Text>
    {' '}{comment.comment}
  </Text>
  
 
</View>
))}
  
  </>
  

)

  

 



const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1.6,
    flexDirection: "row",
    // marginLeft:6
  },

  leftFooterContainer:{
    flexDirection:'row',
    width:'25%',
    justifyContent: 'space-between',
  }
});

export default Post;
