import { View, Text,StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const images=['../assets/backGroundImage.png','../assets/backgroundBlue.png'];

export default function TestScreen() {
  const [mode, steMode] = useState('black');

  const handleMode = (color) =>{
    steMode(color);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gameContainer}>
        <Image source={mode === 'black' ? require('../assets/backGroundImage.png') : require('../assets/backgroundBlue.png') } style={styles.backgroundImage}></Image>
      </View>
        <View style={styles.dotesContainer}>
          <TouchableOpacity style={styles.doteImageWhite} onPress={() => handleMode('black')}>
            <Image source={mode === 'blue' ? require('../assets/images/blackDote.png') : require('../assets/doteImage.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.doteImageBlack} onPress={() => handleMode('blue')}>
            <Image source={mode === 'black' ? require('../assets/images/blackDote.png') : require('../assets/doteImage.png')}></Image>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  gameContainer: {
    width: '90%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '120%',
    height: '120%',
  },
  doteImageWhite: {
    width: '1%', // Adjusted to be relative to gameContainer
    height: '1%', // Adjusted to be relative to gameContainer
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doteImageBlack: {
    width: '1%', // Adjusted to be relative to gameContainer
    height: '1%', // Adjusted to be relative to gameContainer
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotesContainer:{
    width: '1%',
    height: '1%',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: 180,
  },
});