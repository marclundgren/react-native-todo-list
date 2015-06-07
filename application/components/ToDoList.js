'use strict';
var styles = require('../styles/styles');
var React = require('react-native');
var ToDoListItem = require('./ToDoListItem');
var { ListView } = React;

class ToDoList extends React.Component {
  componentWillMount () {
    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
  }

  renderItem (rowData, sectionID, rowID) {
    return (
      <ToDoListItem
        textContent={rowData.txt}
        completed={rowData.complete}/>
    );
  }

  render () {
    var dataSource = this.dataSource.cloneWithRows(this.props.items);
    return (
      <ListView
        dataSource={dataSource}
        renderRow={this.renderItem}
        style={styles.listView}/>
    );
  }
}

module.exports = ToDoList;
