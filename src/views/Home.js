import React from 'react';
import { View, Text, Button } from 'react-native';

export default class Home extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
    }
  }

  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{ color: '#000' }}>Ola mundo react</Text>
      </View>
    )
  }

}