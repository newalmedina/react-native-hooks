import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => (
    <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
    </View>
);

const styles = StyleSheet.create({
    footer: {
        backgroundColor: 'lightgray',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',

    },
    footerText: {
        fontSize: 20,
    },
});

export default Footer;