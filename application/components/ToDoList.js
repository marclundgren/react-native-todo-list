'use strict';
var styles = require('../styles/styles');
var React = require('react-native');
var ToDoListItem = require('./ToDoListItem');
var { Text, TextInput, ListView, View } = React;

class ToDoList extends React.Component {
  constructor () {
    super();
    this.state = {
      items: [{
        initialTextContent: 'First item'
      }],
      newInputText: ''
    };
  }

  componentWillMount () {
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
  }

  onChange (event) {
    this.setState({
      newInputText: event.nativeEvent.text
    });
  }

  onSubmitEditing (event) {
    this.addItem(event.nativeEvent.text);
  }

  renderHeader () {
    const style = {
      backgroundColor: '#eee'
    };

    return (
      <View style={style}>
        {this.renderNewItemInput()}
      </View>
    )
  }

  renderNewItemInput () {
    var style = {
      backgroundColor: '#fff',
      margin: 4,
      fontSize: 20,
      borderColor: 'gray',
      borderWidth: 1,
      height: 30,
      paddingLeft: 10,
      paddingTop: 5,
      paddingBottom: 5,
      marginLeft: 30,
      marginRight: 30,
      marginTop: 15,
      marginBottom: 15,
      borderRadius: 5
    };

    return (
      <TextInput
        ref="theinput"
        autoFocus={true}
        value={this.state.newInputText}
        placeholder={'Buy groceries'}
        style={style}
        onChange={this.onChange.bind(this)}
        onSubmitEditing={this.onSubmitEditing.bind(this)}
        returnKeyType={'done'}/>
    );
  }

  addItem (name) {
    var items = this.state.items;

    items.push({
      initialTextContent: name
    });

    this.setState({
      items,
      newInputText: ''
    });
  }

  renderItem (rowData, sectionID, rowID) {
    return (
      <View>
        <ToDoListItem initialTextContent={rowData.initialTextContent}/>
        <View style={styles.hr}/>
      </View>
    );
  }

  render () {
    var dataSource = this.dataSource.cloneWithRows(this.state.items);

    return (
      <ListView
        dataSource={dataSource}
        renderHeader={this.renderHeader.bind(this)}
        renderRow={this.renderItem.bind(this)}
        style={styles.listView}/>
    );
  }
}

module.exports = ToDoList;
