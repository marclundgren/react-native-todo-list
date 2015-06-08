'use strict';
var styles = require('../styles/styles');
var React = require('react-native');
var ToDoList = require('./ToDoList');
var { View } = React;

class ToDoContainer extends React.Component {

  render () {
    return (
      <View style={{flex:1}}>
        <ToDoList/>
      </View>
    );
  }
}

module.exports = ToDoContainer;
