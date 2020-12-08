//for private chats, go to ChatContacts.js
import React, { Component } from 'react';
import { View } from 'react-native';
import AppHeader from './AppHeader';
import StatusSeparater from './StatusSeparator';
import Contacts from './ContactChat';

class GroupChats extends Component {
    render() {
        return (
        <View>
            <AppHeader iconname="menu" subtitle="my groups"/>
            <Contacts name="BSSE4 2020"  message="drake:  guys partey is so good"/>
            <StatusSeparater />
            <Contacts name="BSSM 13-14"  message="mubiru:  members kindly send the money to my number"/>
            <StatusSeparater />
            <Contacts name="Pride Of London"  message="+256 79 036668: Creativity"/>
            <StatusSeparater />
        </View>
        );
    }
}

export default GroupChats;