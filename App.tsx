import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
class myApp extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      name: 'abhi',
    };
  }
  componentDidMount(): void {
    setTimeout(() => {
      this.setState({
        name: 'unknown',
      });
    }, 3000);
  }
  onChnageName = () => {
    if (this.state.name == 'rameesh') {
      this.setState({
        name: 'abhi',
      });
    } else {
      this.setState({
        name: 'rameesh',
      });
    }
  };
  render() {
    return (
      <>
        <View>
          <Text>{this.state.name}</Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              padding: 20,
            }}
            onPress={() => this.onChnageName()}>
            <Text>Change Name</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
export default myApp;
