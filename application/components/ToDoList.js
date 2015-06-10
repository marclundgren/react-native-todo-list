'use strict';
var styles = require('../styles/styles');
var React = require('react-native');
var ToDoListItem = require('./ToDoListItem');
var { Text, TextInput, ListView, View } = React;
var Icon = require('EvilIcons');

class ToDoList extends React.Component {
  constructor () {
    super();
    this.state = {
      items: [
        { initialTextContent: 'Uno'},
        { initialTextContent: 'Dos'},
        { initialTextContent: 'Tres'},

      ],
      newInputText: ''
    };
  }

  componentWillMount () {
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
  }

  onSubmitEditing (event) {
    this.addItem(event.nativeEvent.text);
  }

  renderNavicon () {
    const style = {
      flex: 1,
      alignSelf: 'center',
    };

    return (
      <View style={style}>
        <Text>Navicon</Text>
      </View>
    );
  }
  renderTitle () {
    const style = {
      flex: 1,
      textAlign: 'center',
    };

    const textStyle = {
      fontSize: 28,
      textAlign: 'center',
    };

    return (
      <View style={style}>
        <Text style={textStyle}>TodoList</Text>
      </View>
    );
  }
  renderEditToggler () {
    const style = {
      flex: 1,
      alignSelf: 'center',
    };

    const textStyle = {
      textAlign: 'right',
      // this doesn't seem to work...
    }

    const iconColor = '#333'

    return (
      <View style={style}>
        <Icon name="pencil" size={27} color={iconColor} />
      </View>
    );
  }

  renderHeader () {

    const containerStyle = {
      backgroundColor: '#eee'
    };


    const topStyle = {
      // backgroundColor: 'red',
      borderWidth: 1,
      // flexDirection: 'row',
      flexDirection: 'row',
    };

    return (
      <View style={containerStyle}>
        <View style={topStyle}>
          {this.renderNavicon()}
          {this.renderTitle()}
          {this.renderEditToggler()}
        </View>
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
        autoFocus={true}
        placeholder={'Add New Task'}
        style={style}
        selectTextOnFocus={true}
        value={this.state.newInputText}
        bufferDelay={1}
        onChangeText={(text) => this.setState({newInputText: text})}
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

  renderListItem (rowData, sectionID, rowID) {
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
        renderSectionHeader={this.renderHeader.bind(this)}
        renderRow={this.renderListItem.bind(this)}
        style={styles.listView}/>
    );
  }
}

module.exports = ToDoList;
