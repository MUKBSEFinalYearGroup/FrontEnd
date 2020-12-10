// This class shows the private chats

import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import AppHeader from './AppHeader';
import Contacts from './ContactChat';
import axios from 'axios';

class ChatList extends Component {
    constructor(props){
        super(props);
        this.handleSubmitName = this.onSubmitName.bind(this);
        this.state = {
            messages: [],
            hasName: false
        }
    }

    onSubmitName(e) { // (5)
        const name = e.nativeEvent.text;
        this.setState({
            name,
            hasName: true
        });
    }
    componentDidMount() {
        axios.get('http://yochat.goproug.com/api/get-user-chats/1')
            .then(res => {
                const messages = res.data.map(obj => ({contact_number: obj.contact_number, name: obj.name, message: obj.message, user_id:1}));
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
                        <Contacts name={prop.name}  message={prop.message} key={key} icon="check" onSubmitName={ this.handleSubmitName }/>
                        );
                    })}
                </ScrollView>
            </View>
        
        );
    }
}

export default ChatList;