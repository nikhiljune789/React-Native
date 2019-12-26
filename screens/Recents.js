import React, {Component} from 'react';
import {Text, View, StyleSheet, ImageBackground, TextInput} from 'react-native';
import MyHeader from '../screens/AppBarHeader';
import {Appbar, Card, Title} from 'react-native-paper';
export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MyHeader></MyHeader>
        <ImageBackground
          style={{width: '100%', height: '60%'}}
          resizeMode="stretch"
          source={require('../assets/mycurve.png')}>
          <TextInput
            style={{
              borderRadius: 30,
              margin: 50,
              backgroundColor: 'white',
              height: 50,
              width: 300,
              alignSelf: 'center',
            }}
            placeholder="    Search"></TextInput>
        </ImageBackground>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: '-35%',
            justifyContent: 'space-around',
          }}>
          <View>
            <Card style={styles.mycard}>
              <Card.Content>
                <Title>React Native</Title>
              </Card.Content>
            </Card>

            <Card style={styles.mycard}>
              <Card.Content>
                <Title>React Native</Title>
              </Card.Content>
            </Card>

            <Card style={styles.mycard}>
              <Card.Content>
                <Title>React Native</Title>
              </Card.Content>
            </Card>
          </View>

          <View>
            <Card style={styles.mycard}>
              <Card.Content>
                <Title>React Native</Title>
              </Card.Content>
            </Card>

            <Card style={styles.mycard}>
              <Card.Content>
                <Title>React Native</Title>
              </Card.Content>
            </Card>

            <Card style={styles.mycard}>
              <Card.Content>
                <Title>React Native</Title>
              </Card.Content>
            </Card>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  mycard: {
    marginBottom: 20,
    elevation: 8,
    marginTop: 15,
  },
});
