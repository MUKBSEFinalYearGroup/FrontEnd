import * as React from 'react';
import { List, Avatar } from 'react-native-paper';
import { View } from 'react-native';
import AppHeader from './AppHeader';
import StatusSeparater from './StatusSeparator';

const YoChatCallers = (props) => (
        <View>
            <AppHeader iconname="menu" subtitle="my calls"/>
            <List.Item
                    title="Katende Joseph"
                    description="Yesterday, 12:45 pm"
                    left={props => <Avatar.Image size={64} source={require('../assets/avatar-image.png')} 
                    style="margin:20; paddingTop:20"/>}
                    right={props => <List.Icon {...props} icon="phone-plus" />
                    }
                />
            <StatusSeparater />
        </View>
);


export default YoChatCallers;