import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Video from 'react-native-video';
import ViewPager from '@react-native-community/viewpager';
//import {Button} from 'react-native-paper';
import {Button} from 'react-native-elements';

// import { Video } from "expo";

export default class HomeScreen extends Component {
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
        <ViewPager style={styles.viewPager} initialPage={0}>
          <View key="1">
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
              }}>
              <Image
                source={require('../assets/Meditation/ic_main_logo.png')}
                style={{
                  height: 100,
                  width: 200,
                }}></Image>

              <View style={{marginTop: 30}}>
                <Text style={{color: 'grey', fontSize: 17, fontWeight: 'bold'}}>
                  Our mission is to inspire 5 billion people {'\n'} {'\t'}
                  {'\t'}
                  {'\t'}
                  {'\t'}
                  {'\t'}
                  {'\t'}
                  to find their true purpose
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 100,
              }}>
              <Button
                buttonStyle={{
                  backgroundColor: 'rgba(52, 52, 52, 0.5)',
                  width: 350,
                }}
                onPress={() => this.props.navigation.navigate('GetStarted')}
                title="GET STARTED"
              />
            </View>
          </View>

          <View key="2" style={{alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 20, marginTop: 40}}>
              SLEEP
            </Text>
            <Image
              source={require('../assets/Meditation/ic_sleep_stories.png')}
              style={{height: 50, width: 80, marginTop: 80}}></Image>
            <Text style={{color: 'white', fontSize: 20, marginTop: 10}}>
              SLEEP STORIES
            </Text>

            <Image
              source={require('../assets/Meditation/ic_sleep_selected.png')}
              style={{height: 60, width: 60, marginTop: 80}}></Image>
            <Text style={{color: 'white', fontSize: 20, marginTop: 10}}>
              MEDITATIONS
            </Text>

            <Image
              source={require('../assets/Meditation/ic_music_sound.png')}
              style={{height: 50, width: 80, marginTop: 80}}></Image>
            <Text style={{color: 'white', fontSize: 20, marginTop: 10}}>
              MUSIC & SOUNDS
            </Text>
          </View>

          <View key="3" style={{alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 20, marginTop: 40}}>
              MINDFULNESS
            </Text>
            <Image
              source={require('../assets/Meditation/ic_live_classes.png')}
              style={{height: 50, width: 80, marginTop: 80}}></Image>
            <Text style={{color: 'white', fontSize: 20, marginTop: 10}}>
              SLEEP STORIES
            </Text>

            <Image
              source={require('../assets/Meditation/ic_meditation_selected.png')}
              style={{height: 60, width: 60, marginTop: 70}}></Image>
            <Text style={{color: 'white', fontSize: 20, marginTop: 10}}>
              MEDITATIONS
            </Text>

            <Image
              source={require('../assets/Meditation/ic_movement.png')}
              style={{height: 70, width: 80, marginTop: 70}}></Image>
            <Text style={{color: 'white', fontSize: 20, marginTop: 10}}>
              MOVEMENT
            </Text>
          </View>
        </ViewPager>
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
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  viewPager: {
    flex: 1,
  },
});
