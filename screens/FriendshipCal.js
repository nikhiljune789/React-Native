import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {TextInput, Appbar, Button, StatusBar} from 'react-native-paper';

import DisplayLove from './DisplayLove';
export default class FlexDimensionsBasics extends Component {
  state = {
    fname: '',
    sname: '',
    result: 'loading',
  };

  submitit() {
    fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?fname=${this.state.fname}&sname=${this.state.sname}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
          'x-rapidapi-key':
            '509dad401amshf86845a9bb850eep1cceacjsn769c473222f9',
        },
      },
    )
      .then(data => data.json())
      .then(data2 => {
        console.log(data2);
        this.setState({
          result: data2,
        });
      });
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'moccasin'}}>
        <Appbar.Header style={{backgroundColor: 'lightcoral'}}>
          <Appbar.Content
            title="Friendship Calculator"
            style={{alignItems: 'center'}}
          />
        </Appbar.Header>

        <TextInput
          label="First Person Name"
          // value={this.state.text}
          style={{marginTop: 50, backgroundColor: 'yellow'}}
          onChangeText={text => this.setState({fname: text})}
        />
        <TextInput
          label="Second Person Name"
          // value={this.state.text}
          style={{marginTop: 30, backgroundColor: 'pink'}}
          onChangeText={text => this.setState({sname: text})}
        />
        <Button
          icon="camera"
          mode="contained"
          style={{margin: 40, backgroundColor: 'red'}}
          onPress={this.submitit.bind(this)}>
          Calculate
        </Button>
        <DisplayLove data={this.state.result}></DisplayLove>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 100,
    width: '100%',
    backgroundColor: '#5ead97',
  },
});
