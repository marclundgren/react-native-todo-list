'use strict';
var styles = require('../styles/styles');
var React = require('react-native');
var { Text, View, TouchableHighlight } = React;
var ToDoEdit = require('./ToDoEdit');
var Icon = require('EvilIcons');

class ToDoListItem extends React.Component {

  getDefaultProps () {
    return {
      initialTextContent: ''
    };
  }

  getInitialState () {
    return {
      textContent: 'Buy groceries',
      completed: false
    }
  }

  componentWillMount () {
    this.setState({
      textContent: this.props.initialTextContent
    })
  }

  edit (rowData, rowID) {
    console.log('todo...')

    // this.props.navigator.push({
    //   title: this.props.textContent,
    //   component: ToDoEdit,
    // });
  }

  toggleCompleted () {
    var completed = !this.state.completed;

    this.setState({ completed });
  }

  // complete () {
  //   this.setState({
  //     completed: true
  //   })
  // }

  render () {

    const completed = this.state.completed;
    const textContent = this.state.textContent;

    const styleChecker = {
      flex: 1,
      padding: 5
    };

    var stylesContainer = {
      flex: 1,
      flexDirection: 'row',
      // justifyContent: 'center',
      // alignItems: 'flex-start',
      padding: 10,
      backgroundColor: '#ffffff',
    };
    return (
      <View style={stylesContainer}>
        <TouchableHighlight onPress={this.toggleCompleted.bind(this)} style={styleChecker}>
          <View>
            <Icon name="check" size={30} color="gray" />
          </View>
        </TouchableHighlight>
        <Text style={[styles.txt, completed && styles.completed]}>
          {textContent}
        </Text>
      </View>
    );
  }
}

module.exports = ToDoListItem;
