import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.title}>Downloader</Text>
            <TouchableOpacity>
            <Image source={require('../../assets/images/snaplogo.png')}
                style={{
                    width: 45,
                    height: 45,
                }}></Image>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
    },
    title:{
        fontSize: 30,
        padding: 10,
    },
})

export default Navbar;
