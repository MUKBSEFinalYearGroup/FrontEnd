import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import { Paragraph } from 'react-native-paper';

const FrequentlyAskedQuestions = () => (
    <Paragraph style={styles.container}>
        <Text>This section is to have the Faqs </Text>
    </Paragraph>
);

const styles = StyleSheet.create({
    container:{
        padding:20
    }
});

export default FrequentlyAskedQuestions;