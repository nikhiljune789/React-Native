import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

//functional component
const DisplayLove = prop => {
  if (prop.data == 'loading') {
    return <Text>Kindly Wait</Text>;
  }
  if (prop.data.message) {
    return (
      <Text style={{fontSize: 22}}>Something Went Wrong. Give a try again</Text>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{prop.data.percentage}</Text>
        <Text style={styles.text}>{prop.data.result}</Text>
      </View>
    );
  }
};

export default DisplayLove;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});
