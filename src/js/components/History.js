import React, {Component} from 'react';
import {ListView, Text, View } from 'react-native';

var TresEnRayaStore = require('../stores/TresEnRayaStore');

var History = React.createClass({
  getInitialState: function(){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds
    };
  },
  componentDidMount: function(){
    const history = TresEnRayaStore.getHistory();
    dataSource = this.state.dataSource.cloneWithRows(history);
    this.setState({dataSource: dataSource});
  },
  _getHistoryFromDataSource: function(){
    let history = [];
    for(var i=0; i<this.state.dataSource.getRowCount(); i++){
      history.push(this.state.dataSource.getRowData(0,i));
    }
    return history;
  },
  _renderRow: function(move){
    let casilla = move.casilla;
    let turno = move.turno;
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 30}}> El jugador {turno} ha pulsado {casilla} </Text>
      </View>
    )
  },
  render: function(){
    return (
      <View style={{flex: 1, marginTop: 25}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          enableEmptySections={true}
        />
      </View>
    );
  }
});
module.exports = History;
