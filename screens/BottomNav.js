import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground, StatusBar} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  TextInput,
  BottomNavigation,
} from 'react-native-paper';

import Music from './Music';
import Albums from './Album';
import Recents from './Recents';
import PlayList from './PlayList';

state = {
  active: 'first',
};

const MusicRoute = () => <Music />;

const AlbumsRoute = () => <Albums />;

const RecentsRoute = () => <Recents />;

const PlayListRoute = () => <PlayList />;

export default class Main extends Component {
  state = {
    index: 0,
    routes: [
      {key: 'music', title: 'Music', icon: 'music', color: '#778899'},
      {key: 'albums', title: 'Albums', icon: 'album', color: '#009688'},
      {key: 'recents', title: 'Recents', icon: 'history', color: '#795548'},
      {key: 'playlist', title: 'PlayList', icon: 'facebook', color: '#cd5c5c'},
    ],
  };
  _handleIndexChange = index => this.setState({index});

  _renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    playlist: PlayListRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
