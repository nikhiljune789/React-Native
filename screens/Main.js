import React, {Component} from 'react';
import {SocialIcon, Icon, Button as BT} from 'react-native-elements';
import RBSheet from 'react-native-raw-bottom-sheet';
// import Icon from 'react-native-vector-icons/FontAwesome';

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar,
  TextInput as TI,
} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  TextInput,
} from 'react-native-paper';

export default class Main extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <ImageBackground
        source={require('../assets/cardbackground.png')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <StatusBar translucent backgroundColor="transparent" />

          <Card style={styles.card}>
            <Title
              style={{
                alignSelf: 'center',
                fontSize: 30,
                marginTop: 70,
                color: 'black',
              }}>
              LOGIN SCREEN
            </Title>

            <TextInput
              label="Email"
              mode="outlined"
              style={styles.email}
              onChangeText={text => this.setState({text})}
            />
            <TextInput
              secureTextEntry={true}
              label="Password"
              mode="outlined"
              style={styles.email}
              onChangeText={text => this.setState({text})}
            />
            <Button
              onPress={() => this.props.navigation.navigate('BottomNav')}
              mode="contained"
              style={styles.loginButton}>
              Login
            </Button>
            <Text style={{alignSelf: 'center', marginTop: 10}}>Or</Text>
            <Button
              onPress={() => this.props.navigation.navigate('FriendshipCal')}
              mode="contained"
              style={styles.registerButton}>
              Friendship Calculator Api
            </Button>
            <Button
              onPress={() => this.props.navigation.navigate('Register')}
              mode="contained"
              style={styles.registerButton}>
              Meditation.Live
            </Button>
            {/* <SocialIcon
              style={{ marginTop: 20 }}
              title="Sign In With Facebook"
              button
              type="facebook"
            /> */}

            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon
                name="caretcircleoup"
                type="antdesign"
                // color="#517fa4"
                onPress={() => {
                  this.RBSheet.open();
                }}
              />
              <RBSheet
                closeOnDragDown="true"
                ref={ref => {
                  this.RBSheet = ref;
                }}
                height={600}
                duration={250}
                customStyles={{
                  container: {
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                }}>
                <ImageBackground
                  source={require('../assets/backgroundreact.jpg')}
                  style={{width: '100%', height: '100%'}}>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        fontFamily: 'monospace',
                        fontSize: 50,
                        fontStyle: 'italic',
                        marginTop: 20,
                        color: '#008080',
                      }}>
                      Register
                    </Text>
                    <View>
                      <TI
                        style={{
                          width: 300,
                          marginTop: 80,
                          fontSize: 20,
                          borderWidth: 1,
                          borderColor: 'red',
                          borderRadius: 20,
                        }}
                        placeholder="Enter Your Email"
                        placeholderTextColor="orange"></TI>

                      <TI
                        style={{
                          width: 300,
                          marginTop: 30,
                          fontSize: 20,
                          borderWidth: 1,
                          borderColor: 'red',
                          borderRadius: 20,
                        }}
                        secureTextEntry={true}
                        placeholder="Enter Password"
                        placeholderTextColor="orange"></TI>

                      <TI
                        style={{
                          width: 300,
                          marginTop: 30,
                          fontSize: 20,
                          borderWidth: 1,
                          borderColor: 'red',
                          borderRadius: 20,
                        }}
                        placeholder="Enter Mobile Number"
                        placeholderTextColor="orange"></TI>

                      <BT
                        title="Register"
                        type="solid"
                        buttonStyle={{marginTop: 80}}></BT>
                    </View>
                  </View>
                </ImageBackground>
              </RBSheet>
            </View>
          </Card>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 350,
    height: 600,
    borderStyle: 'solid',
    alignContent: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    opacity: 0.8,
  },
  email: {
    width: 300,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 20,
    borderRadius: 40,
  },

  loginButton: {
    width: 200,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 30,
  },
  registerButton: {
    width: 300,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 30,
  },
});
