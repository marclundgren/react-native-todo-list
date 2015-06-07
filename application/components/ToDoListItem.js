'use strict';
var styles = require('../styles/styles');
var React = require('react-native');
var { Text, View, TouchableHighlight } = React;


class ToDoListItem extends React.Component {
  getDefaultProps () {
    return {
      textContent: 'Buy groceries',
      completed: false
    }
  }

  render () {

    const completed = this.props.completed;
    const textContent = this.props.textContent;

    return (
      <View>
        <TouchableHighlight
          onPress={this.props.onPress}>
          <View style={styles.container}>
            <Text style={[styles.txt, completed && styles.completed]}>
              {textContent}
            </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.hr}/>
      </View>
    );
  }
}

module.exports = ToDoListItem;
