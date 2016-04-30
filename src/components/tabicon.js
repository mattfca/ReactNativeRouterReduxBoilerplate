import React, {Component, View, Text, StyleSheet} from "react-native"
import Icon from 'react-native-vector-icons/Ionicons';

export default class extends React.Component {

  render(){
    return (
      <View style={[styles.tab]}>
        <Icon
          style={styles.tabIcon}
          name={this.props.iconName}
          size={26}
          color={this.props.selected ? '#4b4f54' :'#808080'}
          />
        <Text
          style={[styles.tabText,{color: this.props.selected ? '#4b4f54' :'#808080'}]}
          >
          {this.props.titleTab}
        </Text>
      </View>

    );
  }
}

let styles = StyleSheet.create({
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabIcon: {

  },
  tabText: {
    fontSize: 12
  }
});