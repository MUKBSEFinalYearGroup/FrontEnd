// This class shows the private chats

import React, { Component } from 'react';
import { View } from 'react-native';
import AppHeader from './AppHeader';
import StatusSeparater from './StatusSeparator';
import Contacts from './ContactChat';

class ChatList extends Component {
    render() {
        return (
        <View>
            <AppHeader iconname="menu" subtitle="my private chats"/>
            <Contacts name="Napro Bsw"  message="You:  i didn't manage to come"/>
            <StatusSeparater />
            <Contacts name="Napro Bsw"  message="You:  i didn't manage to come"/>
            <StatusSeparater />
            <Contacts name="Napro Bsw"  message="You:  i didn't manage to come"/>
            <StatusSeparater />
        </View>
        );
    }
}

export default ChatList;