// import React from "react";
// import { Dimensions, ImageBackground, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
// import ChatScreenHeader from './ChatScreenHead'; 
// import { List, Avatar } from 'react-native-paper';

// const image = { uri: "http://finalyear.goproug.com/wp-content/themes/sydney/images/header.jpg" };


// const ChatScreen = (props) => {
//     const [text, setText] = React.useState('');
//     return (
//         <KeyboardAvoidingView
//         behavior={Platform.OS == "ios" ? "padding" : "height"}
//         style={styles.container}
//     >
//     <SafeAreaView />
//     <View style={styles.container}>
//         <ChatScreenHeader name={props.name} />
//         <ImageBackground source={image} style={styles.image}>
//         <TextInput
//             value={text}
//             style={styles.textInput}
//             placeholder=" Type A Message"
//             onChangeText={text => setText(text)}
//             />
//         </ImageBackground>
//     </View>
//     </KeyboardAvoidingView>
//     )
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: "column",
//         backgroundColor: "#2B3654",
//         justifyContent: "flex-end",
//     },
//     image: {
//         flex: 1,
//         resizeMode: "cover",
//         justifyContent: "center"
//     },
//     textInput: {
//         color: "black",
//         fontSize: 14,
//         fontWeight: "bold",
//         textAlign: "left",
//         backgroundColor: "aliceblue",
//         marginTop: 0.82 * Dimensions.get('window').height,
//         borderRadius:2,
//         marginLeft: 5,
//         marginRight: 60,
//     },
// });
// export default ChatScreen;


import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { API_KEY} from 'react-native-dotenv';
import { StreamChat } from "stream-chat";
import AsyncStorage from '@react-native-community/async-storage';
import {
  Chat,
  Channel,
  MessageList,
  MessageInput,
} from "stream-chat-expo";

  const chatClient = new StreamChat(API_KEY);
  class ChannelScreen extends React.Component {
  state = {
      id:'',
      token:'',
      status: false,
      channel: ''
  }
  getUserToken = async ()=>{
      await AsyncStorage.getItem("token").then((token)=>{
          this.setState({token});
      })
  }
  getUserId = async ()=>{
      await AsyncStorage.getItem("user_id").then((user_id)=>{
          this.setState({id:user_id});
      })
  }
  async componentDidMount(){
      await this.getUserId();
      await this.getUserToken();
      chatClient.setUser({
          id: this.state.id,
          name: this.state.id,
          image:
              'https://stepupandlive.files.wordpress.com/2014/09/3d-animated-frog-image.jpg',
          },
          this.state.token
          );
          this.setState({channel: chatClient.channel("messaging", "", {
                  members:["eze", "admin"]
          })})
              await this.state.channel.watch();
  }
    render() {
      return (
        <SafeAreaView>
          <Chat client={chatClient}>
            <Channel channel={this.state.channel}>
              <View style={{ display: "flex", height: "100%" }}>
                <MessageList />
                <MessageInput />
              </View>
            </Channel>
          </Chat>
        </SafeAreaView>
      );
    }
  }

export default ChannelScreen;