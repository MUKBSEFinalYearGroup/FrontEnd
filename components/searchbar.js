import * as React from 'react';
import {View} from 'react-native';
import { Searchbar } from 'react-native-paper';
import AppHeader from './AppHeader';

const SearchBarList = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View>
        <AppHeader iconname="menu"/>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                />
        </View>
    );
};

export default SearchBarList;