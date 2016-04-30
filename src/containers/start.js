import React, { PropTypes, Text, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { Actions } from 'react-native-router-flux';

import { fetchAuthentication } from '../actions'

class Start extends React.Component {
  static propTypes = {
    routes: PropTypes.object,
  };
  
  _onPressButton() {
    let { dispatch } = this.props;
    let action = fetchAuthentication();
    dispatch(action)
  }
  
  render () {
    return (
      <View>
        <Text>
          Home screen called {this.props.routes.scene.title}
        </Text>
        <Text onPress={this._onPressButton.bind(this)} >
            Login
        </Text>
      </View>
    );
  }
}

export default connect(({routes}) => ({routes}))(Start);