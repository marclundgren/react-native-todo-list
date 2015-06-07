'use strict';
var styles = require('../styles/styles');
var React = require('react-native');
var ToDoList = require('./ToDoList');
var ToDoEdit = require('./ToDoEdit');
var { Text, View, ListView, TouchableHighlight } = React;

class ToDoContainer extends React.Component {
  constructor () {
    super();
    this.state = {
      items: [
        {txt: 'Learn react native', complete: false},
        {txt: 'Make a to-do app', complete: true}
      ]
    };
  }

  deleteItem (index) {
    var items = this.state.items;
    items.splice(index, 1);
    this.setState({items: items})
  }

  updateItem (item, index) {
    var items = this.state.items;

    if (index) {
      items[index] = item;
    }
    else {
      items.push(item)
    }
    this.setState({items});
    this.props.navigator.pop();
  }

  renderList () {
    return (
      <ToDoList
        items={this.state.items}/>
    );
  }

  renderAddButton () {
    return (
      <TouchableHighlight
        style={[styles.button, styles.newButton]}
        underlayColor='#99d9f4'
        onPress={this.openItem}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableHighlight>
    );

  }

  render () {
    return (
      <View style={{flex:1}}>
        {this.renderList()}
        {this.renderAddButton()}
      </View>
    );
  }
}

module.exports = ToDoContainer;
