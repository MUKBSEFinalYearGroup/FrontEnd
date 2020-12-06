import * as React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { Drawer } from 'react-native-paper';
import AppHeader from './AppHeader';
import {Actions} from 'react-native-router-flux';

const AppDrawer = () => {
    const [active, setActive] = React.useState('');
    const _goToPersonalChats = () => {
        Actions.contacts_list()
    }
    const _goToGroupChats = () => {
        Actions.group_chat()
    }
    const _goToCalls = () => {
        Actions.yo_chat_calls()
    }
    const _goToFAQs = ()=>{
        Actions.frequently_asked_questions()
    }
    return (
        <View>
            <AppHeader iconname="close"/>

            <Drawer.Section title="Some title">
            <Drawer.Item
                label="Personal Chats"
                active={active === 'first'}
                onPress={() => setActive('first'),
                _goToPersonalChats
                }
                icon="account"/>
            <Drawer.Item
                label="Group Chats"
                active={active === 'second'}
                onPress={() => setActive('second'),
                _goToGroupChats
                }
                icon="account-group"/>
            <Drawer.Item
                label="Calls"
                active={active === 'third'}
                onPress={() => setActive('third'),
                _goToCalls
                }
                icon="phone-plus"/>
            <Drawer.Item
                label="Invite Friends"
                active={active === 'fifth'}
                onPress={() => setActive('fifth')}
                icon="account-multiple-plus"/>
            <Drawer.Item
                label="YoChat Faqs"
                active={active === 'sixth'}
                onPress={() => setActive('sixth'),
                _goToFAQs
                }
                icon="file"/>
            <Drawer.Item
                label="Settiings And Privacy"
                active={active === 'seventh'}
                onPress={() => setActive('seventh')}
                icon="cog"/>
            <Drawer.Item
                
                onPress={() => setActive('sixth')}
                style={styles.menu_bottom}/>
            </Drawer.Section>
        </View>
    );
};

const styles = StyleSheet.create({
    menu_bottom:{
        paddingBottom:0.82 * Dimensions.get('window').height
    },
});
export default AppDrawer;