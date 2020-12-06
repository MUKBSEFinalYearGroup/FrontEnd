import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import AppHeader from './components/AppHeader';
import SubAppHeader from './components/SubAppHeader';
import ChatContacts from './components/ChatContacts';
// import SearchBar from './components/searchbar';
// import StatusHead from './components/StatusHeader';
// import MyState from './components/MyStatus';
// import HorizontalRule from './components/HorizontalLine';
// import ContactStatuses from './components/MyContactsStatuses';
import StatusSeparater from './components/StatusSeparator';
import ChatScreen from './components/ChattingScreen';
// import Calls from './components/CallsHeader';
// import YoChatCallers from './components/YoChatCalls'

class ChatList extends Component {
  render() {
    return (
    <View style={{flex: 1}}>
    {/* This is the chat title component */}
      {/* <AppHeader /> */}
      {/* <SubAppHeader /> */}
      {/* This is the search bar component */}
      {/* <SearchBar /> */}
      {/* <StatusHead /> */}
      {/* This Component shows the YoChat App Status */}
      {/* <MyState /> */}
      {/* End of the YoChat App Status */}
      {/* <ScrollView> */}
      {/* This is the chat contacts list */}
        {/* <ChatContacts name="Final Year Project" message="You: Guys we meet at my place"/> */}
        {/* <StatusSeparater/> */}
        {/* End of the chat contacts list */}
        {/* <ChatContacts name="Napro Bsw"  message="You:  i didn't manage to come"/> */}
        {/* <StatusSeparater/> */}
        {/* <ChatContacts  name="Drake Bsw" message="Sema, We meet tumoro"/>  */}
      {/* This component shows the separator */}
      {/* <StatusSeparater/> */}
      {/* End of the separator */}
      {/* </ScrollView> */}
      <ChatScreen />
      {/* <HorizontalRule /> */}
      {/* This Component displays the statuses of My contacts */}
      {/* <ContactStatuses name="Daphine" time="1 minute ago"/> */}
      {/* End of the  statuses of my contacts */}
      {/* This component shows the status horizontal separator */}
      {/* <StatusSeparater name="Joseph Bro" time="2 minues ago"/> */}
      {/* end of the status horizontal separator */}
      {/* This component shows the Calls of the user in other terms its the call header*/}
      {/* <Calls /> */}
      {/* End of Calls Component */}
      {/* This component shows the Callers name and time */}
      {/* <YoChatCallers name="Anish" time="2 minutes ago"/> */}
      {/* End of the callers component */}
    </View>
    );
  }
}

export default ChatList;