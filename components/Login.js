import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableHighlight, Alert} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const Login = ({ navigation }) =>{
    const [contact_number, setContactNumber] = useState("");
    const [password, setUserPassword] = useState("");

    const handleSubmit = async ()=>{
        axios.post("http://yochat.goproug.com/api/authenticate-user", {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                crossorigin:true 
            },
            contact_number,
            password

            }).then((response)=>{
                AsyncStorage.multiSet([['token', response.data.token],['contact_number', contact_number], ['password', password] ]).
                then(
                AsyncStorage.remove,
                    ()=>{
                        
                    // if(contact_number !== '+256702913454'){
                    //     navigation.push('chat_screen');
                    // }else{
                        navigation.push('contacts_list');
                    // }
                }
            )
            }).
            catch((err)=>{
                console.log(err);
                Alert.alert(
                    "FAILED!!",
                    "Please Enter a Correct Phone number and password",
                    [
                        {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                        },
                        { text: "OK", onPress: () => console.log("OK Pressed") }
                    ],
                    { cancelable: false }
                    );
            
            })
        }
        const handleUsername = text => {
            setContactNumber(text);
        };

        const handleUserPassword = text => {
            setUserPassword(text);
        }

        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                    <TextInput style={styles.inputs}
                    placeholder="Username"
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => handleUsername(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                    <TextInput style={styles.inputs}
                    placeholder="Password"
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => handleUserPassword(text)}
                    />
                </View>
                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={()=>handleSubmit()}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableHighlight>
            </View>
            )

    }
    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
    },
    loginButton: {
        backgroundColor: "#00b5ec",
    },
    loginText: {
        color: 'white',
    }, 
    alertStyle: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
    }
});
export default Login;