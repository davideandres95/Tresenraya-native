import React, { Component } from 'react';
import { View } from 'react-native';
import MyButton from './src/js/components/MyButton';

var TresEnRayaActions = require('./src/js/actions/TresEnRayaActions');
var IndexScene = React.createClass({
  render: function(){
    return(
      <View>
        <MyButton onPress={this.props.onForward} text={"Partida en curso"}/>
        <MyButton onPress={TresEnRayaActions.nuevaPartida} text={"Nueva Partida"}/>
        <MyButton onPress={this.props.saveData} text={"Guardar Partida"}/>
        <MyButton onPress={this.props.loadData} text={"Cargar Partida"}/>
      </View>
    )
  }
});

module.exports = IndexScene;
