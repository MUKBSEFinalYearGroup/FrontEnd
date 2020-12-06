import * as React from 'react';
import { List } from 'react-native-paper';

const MyState = () => (
    <List.Item
        title="My Status"
        description="Today, 8:41 AM"
        left={props => <List.Icon {...props} icon="folder" />}
    />
    
);


export default MyState;