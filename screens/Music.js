import React, {Component} from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import {
  Button,
  Card,
  Title,
  Paragraph,
  TextInput,
  BottomNavigation,
} from 'react-native-paper';
import {Avatar, Badge, Icon} from 'react-native-elements';

export default class HomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../assets/music.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <Card style={styles.card}>
            <View>
              <Avatar
                containerStyle={{
                  alignSelf: 'center',
                  marginTop: 10,
                }}
                size="large"
                rounded
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
              />
              <Badge
                value="10+"
                status="error"
                containerStyle={{position: 'absolute', top: 15, right: 125}}
              />
            </View>
            <Text style={{alignSelf: 'center', fontSize: 25}}>
              Lexy William
            </Text>
            <Icon name="sc-telegram" type="evilicon" color="#517fa4" />
          </Card>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 350,
    height: 300,
    borderStyle: 'solid',
    alignContent: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: '#80000000',
  },
});
