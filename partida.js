import React, { Component } from 'react';
import { View } from 'react-native';
import MyButton from './src/js/components/MyButton';
var TresEnRayaStore = require('./src/js/stores/TresEnRayaStore');
var TresEnRayaActions = require('./src/js/actions/TresEnRayaActions');

const Cabecera = require('./src/js/components/Cabecera');
const Tablero = require('./src/js/components/Tablero');

var PartidaScene = React.createClass({
  render: function(){
    var texto = "Turno del" + TresEnRayaStore.getTurno();
    return(
      <View style={{flex: 1, margin: 10}}>
				<Cabecera style={{flex: 2}} texto={texto} xMoves={TresEnRayaStore.getxMoves} yMoves={TresEnRayaStore.getyMoves}/>
				<Tablero style={{flex: 5}} valores={TresEnRayaStore.getValores}/>
        <MyButton style={{flex: 1}} onPress={TresEnRayaActions.nuevaPartida} text={"Nueva Partida"}/>
        <MyButton style={{flex: 1}} onPress={this.props.onBack} text={"Volver"}/>
        <MyButton style={{flex: 1}} onPress={this.props.onForward} text={"Ver el historial"}/>
			</View>
    )
  }
});

export default PartidaScene;
