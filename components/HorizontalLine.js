import * as React from 'react';
import {View, Text} from 'react-native'


const HorizontalRule = () => (
    <View style={{
        // borderBottomColor: 'black',
        borderTopColor: 'lightgrey',
        borderTopWidth : 0.5,
        // borderBottomWidth: 1,
        paddingBottom: 8,
        paddingTop: 8,
        paddingLeft: 8,
        backgroundColor: 'whitesmoke'
    }}>
        <Text>Viewed updates</Text>
    </View>
);

export default HorizontalRule;