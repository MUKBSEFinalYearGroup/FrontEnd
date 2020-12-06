import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './ChatContacts'
import ChattingScreen from './ChattingScreen'
import Menu from './Menu';
import GroupChat from './GroupChats';
import YoChatCallers from './YoChatCalls';
import FrequentlyAskedQuestions from './FAQs';
import { Searchbar } from 'react-native-paper';
import SearchBarList from './searchbar';

const Routes = () => (
    <Router>
        <Scene key = "root">
            <Scene key = "contacts_list" component = {Home} initial = {true} header= {null}/>
            <Scene key="drawer_menu" component = {Menu}  header={null} />
            <Scene key = "chat_screen" component = {ChattingScreen} header= {null} />
            <Scene key="group_chat" component={GroupChat} header={null}/>
            <Scene key="yo_chat_calls" component={YoChatCallers} header={null} />
            <Scene key="frequently_asked_questions" component={FrequentlyAskedQuestions} title="Frequently Asked Questions"/>
            <Scene key="go_to_search" component={SearchBarList} header={null} />
        </Scene>
    </Router>
)
export default Routes