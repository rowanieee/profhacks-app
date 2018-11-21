import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.backgroundContainer}>
          <Image source = {require('./assets/img/color_gradient.png')} style = {styles.backdrop} />
        </View>
        <View>
          <Image style = {styles.logo} source = {require('./assets/img/white_prof.png')} />
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    resizeMode: 'cover'
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  overlay: {
  },
  logo: {
    flex: 0,
    width: Dimensions.get('window').width - 5,
    resizeMode: 'contain'
  },
  backdrop: {
    flex:1,
    flexDirection: 'column'
  },
  headline: {
    fontSize: 32,
    textAlign: 'center',
    color: 'white'
  }
});
