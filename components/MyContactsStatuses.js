import * as React from 'react';
import { List } from 'react-native-paper';

const ContactStatuses = (props) => (
        <List.Item
        title={ props.name }
        description={props.time}
        left={props => <List.Icon {...props} icon="folder" />}
    />
);


export default ContactStatuses;