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
				<Cabecera texto={texto} xMoves={TresEnRayaStore.getxMoves} yMoves={TresEnRayaStore.getyMoves}/>
				<Tablero valores={TresEnRayaStore.getValores}/>
        <MyButton onPress={TresEnRayaActions.nuevaPartida} text={"Nueva Partida"}/>
        <MyButton onPress={this.props.onBack} text={"Volver"}/>
			</View>
    )
  }
});

export default PartidaScene;
