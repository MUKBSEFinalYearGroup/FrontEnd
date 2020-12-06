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
            <Contacts name="BSSE4 2020"  message="drake:  guys partey is suppurb"/>
            <StatusSeparater />
            <Contacts name="BSSM 13-14"  message="mubiru:  My nigga it was suppurb"/>
            <StatusSeparater />
        </View>
        );
    }
}

export default GroupChats;