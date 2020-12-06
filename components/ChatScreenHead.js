import * as React from 'react';
import { StyleSheet, Linking } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';
import {Actions} from 'react-native-router-flux';

const ChatScreenHeader = (props) => {
    const _goBack = () => {
        Actions.contacts_list();
    };

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    return (
        <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} style={style.appBarArrow}/>
        <Avatar.Image size={35} source={require('../assets/avatar-image.png')} style={style.appBarImage}/>
        <Appbar.Content title={props.name} subtitle="today at 13:46" style={style.appBarTitle}/>
        <Appbar.Action icon="video" onPress={_handleSearch} />
        <Appbar.Action icon="phone" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
    );
};

const style = StyleSheet.create({
    appBarImage:{
        marginRight:0,
    },
    appBarArrow:{
        marginRight:0,
        marginLeft:0
    },
    appBarTitle:{
        marginLeft: 0
    }
});
export default ChatScreenHeader;