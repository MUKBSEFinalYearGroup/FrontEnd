import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './ChatContacts'
import ChannelScreen from './ClientChat'
import Menu from './Menu';
import GroupChat from './GroupChats';
import YoChatCallers from './YoChatCalls';
import FrequentlyAskedQuestions from './FAQs';
import Login from './Login'
import SearchBarList from './searchbar';

const Routes = () => (
    <Router>
        <Scene key = "root">
            <Scene key = "login_page" component = {Login} initial = {true} header= {null}/>
            <Scene key = "contacts_list" component = {Home} header= {null}/>
            <Scene key="drawer_menu" component = {Menu}  header={null} />
            <Scene key = "chat_screen" component = {ChannelScreen} header= {null} />
            <Scene key = "admin" component = {ChannelScreen} header= {null} />
            <Scene key="group_chat" component={GroupChat} header={null}/>
            <Scene key="yo_chat_calls" component={YoChatCallers} header={null} />
            <Scene key="frequently_asked_questions" component={FrequentlyAskedQuestions} title="Frequently Asked Questions"/>
            <Scene key="go_to_search" component={SearchBarList} header={null} />
        </Scene>
    </Router>
)
export default Routes