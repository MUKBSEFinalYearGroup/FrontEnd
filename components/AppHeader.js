import * as React from 'react';
import { Appbar } from 'react-native-paper';
import {Actions} from 'react-native-router-flux';

const AppHeader = (props) => {
    const _goBack = () => console.log('Went back');
    const _goToSearch = () =>{
        Actions.go_to_search()
    }
    const _openOrCloseMenu = () => {
        if(props.iconname == "menu"){
            Actions.drawer_menu()
        }else{
            Actions.contacts_list()
        }
    };

    const _handleMore = () => console.log('Shown more');

    return (
        <Appbar.Header>
        <Appbar.Action icon={props.iconname} onPress={_openOrCloseMenu} />
        <Appbar.Content title="YoChat"  subtitle={props.subtitle}/>
        <Appbar.Action icon="lock" onPress={_openOrCloseMenu} />
        <Appbar.Action icon="magnify" onPress={_goToSearch} />
        </Appbar.Header>
    );
};

export default AppHeader;