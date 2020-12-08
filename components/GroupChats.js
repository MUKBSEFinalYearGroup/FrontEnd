// This class shows the private chats

import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import AppHeader from './AppHeader';
import Contacts from './ContactChat';
import axios from 'axios';

class GroupChats extends Component {
    constructor(props){
        super(props);
        this.state = {
            groups: []
        }
    }
    componentDidMount() {
        axios.get('http://yochat.goproug.com/api/get-all-groups-i-belong-to/1')
            .then(res => {
                    const groups = res.data.map(obj => ({group_name: obj.group_name}));
                    this.setState({groups})
        });
    }
    render() {
        return (
            <View>
                <View>
                <AppHeader iconname="menu" subtitle="Groups"/>
                </View>
                <ScrollView>
                    {this.state.groups.map((prop, key)=>{
                        return(
                        <Contacts name={prop.group_name}  message={prop.message} key={key} icon=""/>
                        );
                    })}
                </ScrollView>
            </View>
        
        );
    }
}

export default GroupChats;