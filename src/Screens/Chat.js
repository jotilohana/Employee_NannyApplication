import React, {useState} from 'react';
import {View, StyleSheet, Text, Image,FlatList, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import DropdownChat from './dropdownChat';
import Attachment from './Attachment';

const Messages = [
  {
    id: '1',
    messageTime: '4 mins ago',
    messageText:
      'Hey there',
  },
  {
    id: '2',
    messageTime: '2 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '3',
    userName: 'Ken',
    userImg: require('../Assets/profile2.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '4',
    userName: 'Ken',
    userImg: require('../Assets/profile2.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '5',
    userName: 'Ken',
    userImg: require('../Assets/profile2.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
  {
    id: '6',
    userName: 'Ken',
    userImg: require('../Assets/profile2.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there, this is my test for a post of my social app in React Native.',
  },
];

const Chat=({navigation})=>{
    const [text, onChangeText] = useState();
    const [clickedBtn, setClickedBtn] = useState(false);

    const AttachmentContent=()=>{
      return(
        <View>
        <Attachment />
        </View>
      )
    }
    return(
        <View style={styles.mainView}>
        <View style={{marginBottom:80, marginTop:45}}>
        <ScrollView>
           <FlatList
            data={Messages}
            keyExtractor={item=>item.id}
            renderItem={({item}) => (
            <View style={{marginLeft:'auto',}}>
           <View style={{backgroundColor:'#03204c', padding:10, margin:10, borderRadius:20,  marginLeft:80}}>
            <Text style={{color:'white'}}>{item.messageText}</Text>
            </View>
            </View>
          )
          }
            />
            
         <View>
          <FlatList
            data={Messages}
            keyExtractor={item=>item.id}
            renderItem={({item}) => (
            <View style={{marginRight:'auto',}}>
           <View style={{backgroundColor:'white', padding:10, margin:10, borderRadius:20,  marginRight:80}}>
            <Text style={{color:'black'}}>{item.messageText}</Text>
            </View>
            </View>
          )
          }
            />
        </View>
        </ScrollView>
        </View>
        {clickedBtn? <Attachment />: null }
        {/* <Attachment /> */}
        <View style={styles.inputView}>
            <TouchableOpacity
            style={styles.attachment}
            onPress={()=>{setClickedBtn(!clickedBtn)}}
            >
             <Image
            source={require('../Assets/attachment.png')}
            />
            </TouchableOpacity>

           
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Message"
            />
            <TouchableOpacity
            style={styles.send}
            // onPress={()=>navigation.navigate("Edit Profile")}
            >
             <Image
            source={require('../Assets/send.png')}
            />
            </TouchableOpacity>
        </View>
        </View>
    )
}

const styles=StyleSheet.create({
mainView:{
    flex:1
},
inputView:{
    marginTop:'auto',
    backgroundColor:'white',
    margin:20,
    borderRadius:20,
    flexDirection:'row',
},
send:{
    marginLeft:'auto',
    margin:10,
    marginRight:20
},
input:{
    fontSize:18,
    marginLeft:10,
},
attachment:{
    marginLeft:20,
    margin:10
},
})

export default Chat;






// import React, { useState, useCallback, useEffect } from 'react'
// import {View, TouchableOpacity, TextInput, Image} from 'react-native';
// import { GiftedChat } from 'react-native-gifted-chat';

// const Chat=()=> {
//   const [messages, setMessages] = useState([]);

//   useEffect(() => {
//     setMessages([
//       {
//         _id: 1,
//         text: 'Hello developer',
//         createdAt: new Date(),
//         user: {
//           _id: 2,
//           name: 'React Native',
//           avatar: 'https://placeimg.com/140/140/any',
//         },
//       },
//     ])
//   }, [])

//   const onSend = useCallback((messages = []) => {
//     setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
//   }, [])



//  return (
//     <GiftedChat
//       messages={messages}
//       onSend={messages => onSend(messages)}
//       user={{
//         _id: 1,
//       }}
//       alwaysShowSend
//       renderMessage ={renderMessage}
//     />
//   )
// }


// export default Chat;