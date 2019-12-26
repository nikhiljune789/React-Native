import React, {Component} from 'react';
import {Icon} from 'react-native-elements';

import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import Video from 'react-native-video';
import {
  FacebookSocialButton,
  GoogleSocialButton,
  InstagramSocialButton,
  LinkedInSocialButton,
  TwitterSocialButton,
} from 'react-native-social-buttons';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Video
          source={require('../assets/video.mp4')}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode={'cover'}
          repeat
          style={styles.video}
        />

        <View style={styles.content}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              iconStyle={{marginTop: 50, marginLeft: 30}}
              name="arrowleft"
              type="antdesign"
              color="white"
              onPress={() => this.props.navigation.navigate('Register')}
            />
            <Text
              style={{
                marginTop: 50,
                color: 'white',
                fontSize: 20,
                marginLeft: 30,
              }}>
              GET STARTED
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 100,
            }}>
            <FacebookSocialButton />
          </View>
          <View style={{marginTop: 30, alignItems: 'center'}}>
            <GoogleSocialButton></GoogleSocialButton>
          </View>
          <View style={{marginTop: 30, alignItems: 'center'}}>
            <InstagramSocialButton></InstagramSocialButton>
          </View>
          <View style={{marginTop: 30, alignItems: 'center'}}>
            <LinkedInSocialButton></LinkedInSocialButton>
          </View>
          <View style={{marginTop: 30, alignItems: 'center'}}>
            <TwitterSocialButton></TwitterSocialButton>
          </View>

          <Text
            style={{
              color: 'white',
              marginTop: 70,
              alignSelf: 'center',
              fontSize: 16,
            }}>
            {'\t'}
            {'\t'}
            {'\t'} I have read and agreed to the {'\n'} Terms of Service and
            Privacy Policy
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  content: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
