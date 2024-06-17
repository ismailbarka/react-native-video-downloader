import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const data = [
  {
    title: 'Video Title 1',
    id: 1,
    image: require('../assets/images/1.png'),
  },
  {
    title: 'Video Title 2',
    id: 2,
    image: require('../assets/images/2.png'),
  },
  {
    title: 'Video Title 3',
    id: 3,
    image: require('../assets/images/3.png'),
  },
];

export default function DownloadsScreen() {
  return (
    <View style={styles.container}>
      {data.map((item) => {
        return (
          <View style={styles.video} key={item.id}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.videoTitle}>
              <Text>{item.title}</Text>
            </View>
            <Text style={styles.moreStyle}>test</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '20%',
    height: 80,
    borderRadius: 5,
    borderColor: 'blue',
    borderWidth: 1,
  },
  video: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    margin: 10,
  },
  videoTitle: {},
  moreStyle: {
    width: '10%',
    backgroundColor: 'blue',
  },
});
