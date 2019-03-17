import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { ProgressCircle } from 'react-native-svg-charts'

export default class App extends Component {
  state = {
    progress: 0.5
  }

  onPressButton = () => {
    this.setState({ progress: Math.random() })
  }

  render() {
    const { progress } = this.state
    return (
      <View style={styles.container}>
        <ProgressCircle
          style={styles.progressCircle}
          progress={progress}
          progressColor="#FF0055"
        />
        <Text>Progress: {progress}</Text>
        <TouchableOpacity onPress={this.onPressButton}>
          <Text>Randomize progress</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  progressCircle: {
    height: 222,
    width: 222,
  }
});
