'use strict';
var styles = require('../styles/styles');
var React = require('react-native');
var { Text, View, TouchableOpacity, TouchableHighlight } = React;
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

  render () {

    const completed = this.state.completed;
    const textContent = this.state.textContent;

    var stylesContainer = {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      backgroundColor: '#ffffff',
    };

    const iconContainerStyle = {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    }

    const styleTextContainer = {
      justifyContent: 'center',
      flex: 8,
    }

    const iconColor = completed ? '#63C29B' : '#ccc';

    return (
      <View style={stylesContainer}>
        <TouchableOpacity onPress={this.toggleCompleted.bind(this)}>
          <View style={iconContainerStyle}>
            <Icon name="check" size={27} color={iconColor} />
          </View>
        </TouchableOpacity>
        <View style={styleTextContainer}>
          <Text style={[styles.txt, completed && styles.completed]}>
            {textContent}
          </Text>
        </View>
      </View>
    );
  }
}

module.exports = ToDoListItem;
