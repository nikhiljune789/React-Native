import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Video from 'react-native-video';
// import { Video } from "expo";
import {createDrawerNavigator} from 'react-navigation-drawer';

import Inbox from '../screens/Inbox';
import Drafts from '../screens/Drafts';

export default createDrawerNavigator(
  {
    Inbox: Inbox,
    Drafts: Drafts,
  },
  {
    initialRouteName: 'Inbox',
    contentOptions: {
      activeTintColor: '#e91e63',
    },
  },
);

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
