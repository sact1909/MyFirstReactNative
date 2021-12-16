/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const NavBar = (prop) => (
  <Appbar style={styles.top}>
    <Appbar.Content title={prop.titleText} />
    <Appbar.Action
      icon="more-vert"
      onPress={() => console.log('Pressed delete')}
    />
  </Appbar>
);

export default NavBar;

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
