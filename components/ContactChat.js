import * as React from 'react';
import { List, Avatar } from 'react-native-paper';
import {Actions} from 'react-native-router-flux';

const Contacts = (props) => {
    const showChatContent = ()=>{
        Actions.chat_screen();
    }
    return (<List.Item
        title={props.name}
        description={props.message}
        left={props => <Avatar.Image size={64} source={require('../assets/avatar-image.png')} 
        style="margin:20; paddingTop:20"/>}
        right={props => <List.Icon {...props} icon="check" />}
        onPress = {showChatContent}
    />)
    };


export default Contacts;