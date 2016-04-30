import React, { PropTypes, Text, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Start extends React.Component {
  static propTypes = {
    routes: PropTypes.object,
  };
  
  _onPressButton() {
    Actions.tabbar({type: 'replace'});
  }
  
  render () {
    return (
      <View>
        <Text>
          Home screen called {this.props.routes.scene.title}
        </Text>
        <Text onPress={this._onPressButton.bind(this)} >
            Go to tabs
        </Text>
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(Start);