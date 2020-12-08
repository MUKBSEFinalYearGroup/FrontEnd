import * as React from 'react';
import { View } from 'react-native';
import { List, Avatar } from 'react-native-paper';
import {Actions} from 'react-native-router-flux';
import StatusSeparater from './StatusSeparator';

const Contacts = (props) => {
    const showChatContent = ()=>{
        Actions.chat_screen();
    }
    return (
    <View>
    <List.Item
        title={props.name}
        description={props.message}
        left={props => <Avatar.Image size={64} source={require('../assets/avatar-image.png')} 
        style="margin:20; paddingTop:20"/>}
        right={props => <List.Icon {...props} icon={props.icon} />}
        onPress = {showChatContent}
    />
    <StatusSeparater />
    </View>
    )
    };


export default Contacts;