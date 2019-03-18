import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Svg, Path, G } from 'react-native-svg'

export default class App extends Component {
  state = {
    toggle: false
  }

  onPressButton = () => {
    this.setState({ toggle: !this.state.toggle })
  }

  render() {
    const { toggle } = this.state
    return (
      <View style={styles.container}>
        <Svg style={{ height: 222, width: 222 }}>
          <G>
            <Path d={toggle ? 'M25 10 L98 65 L70 25 L16 77' : 'M25 10 L98 65'} fill="none" stroke="red" strokeWidth={5} />
          </G>
        </Svg>


        <Svg style={{ height: 222, width: 222 }}>
          <Path d={toggle ? 'M25 10 L98 65 L70 25 L16 77' : 'M25 10 L98 65'} fill="none" stroke="red" strokeWidth={5} />
        </Svg>

        <Text>Toggled: {toggle ? 'YES' : 'NO'}</Text>
        <TouchableOpacity onPress={this.onPressButton}>
          <Text>Toggle</Text>
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
  svg: {
    height: 222,
    width: 222,
  }
});
