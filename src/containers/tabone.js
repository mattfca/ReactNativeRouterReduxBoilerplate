import React, { PropTypes, Text } from 'react-native';
import { connect } from 'react-redux';

class TabOne extends React.Component {
  static propTypes = {
    routes: PropTypes.object,
  };

  render () {
    return (
      <Text>
        The current scene is titled {this.props.routes.scene.title}
      </Text>
    );
  }
}

export default connect(({routes}) => ({routes}))(TabOne);