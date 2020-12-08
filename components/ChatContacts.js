// This class shows the private chats

import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import AppHeader from './AppHeader';
import Contacts from './ContactChat';
import axios from 'axios';

class ChatList extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages: []
        }
    }
    componentDidMount() {
        axios.get('http://yochat.goproug.com/api/get-user-chats/1')
            .then(res => {
                    const messages = res.data.map(obj => ({contact_number: obj.contact_number, name: obj.name, message: obj.message}));
                    this.setState({messages})
        });
    }
    render() {
        return (
            <View>
                <View>
                <AppHeader iconname="menu" subtitle="my private chats"/>
                </View>
                <ScrollView>
                    {this.state.messages.map((prop, key)=>{
                        return(
                        <Contacts name={prop.name}  message={prop.message} key={key} icon="check"/>
                        );
                    })}
                </ScrollView>
            </View>
        
        );
    }
}

export default ChatList;