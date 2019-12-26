import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
//import {Ionicons} from 'react-native-ionicons';
import Icon from 'react-native-ionicons';

export default function AppBar() {
  return (
    <View>
      <Appbar.Header style={{backgroundColor: 'white'}}>
        <Icon
          name="md-menu"
          size={34}
          color="#F86262"
          style={{marginLeft: 10}}
        />
        <Text style={{color: '#F86262', marginLeft: 22, fontSize: 25}}>
          Home
        </Text>
      </Appbar.Header>
    </View>
  );
}
