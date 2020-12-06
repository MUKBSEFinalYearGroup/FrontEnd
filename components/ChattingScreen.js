import React from "react";
import { Dimensions, ImageBackground, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import ChatScreenHeader from './ChatScreenHead'; 
const image = { uri: "http://finalyear.goproug.com/wp-content/themes/sydney/images/header.jpg" };


const ChatScreen = (props) => {
    const [text, setText] = React.useState('');
    return (
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
    >
    <SafeAreaView />
    <View style={styles.container}>
        <ChatScreenHeader name={props.name} />
        <ImageBackground source={image} style={styles.image}>
        <TextInput
        value={text}
        style={styles.textInput}
        placeholder=" Type A Message"
        onChangeText={text => setText(text)}
        />
        </ImageBackground>
    </View>
    </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#2B3654",
        justifyContent: "flex-end",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    textInput: {
        color: "black",
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "left",
        backgroundColor: "aliceblue",
        marginTop: 0.82 * Dimensions.get('window').height,
        borderRadius:400,
        marginLeft: 5,
        marginRight: 5,
    },
});
export default ChatScreen;