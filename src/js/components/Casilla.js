import React, {Component} from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

var TresEnRayaActions = require('../actions/TresEnRayaActions');

const styles = StyleSheet.create({
	casillaStyle:{
		flex: 1,
		padding: 10,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		borderColor: "black"
	},
	CasillaStyleText:{
		fontSize: 60
	}
});

let Casilla = React.createClass({
	_casillaClick: function (){
		if (this.props.valor ==="-"){
			TresEnRayaActions.jugarPosicion(this.props.indiceFila, this.props.indiceColumna)
		}
	},
	render: function (){
		return(
			<TouchableHighlight style={styles.casillaStyle} onPress={this._casillaClick} disabled={this.props.valor!== "-"}>
				<Text style={styles.CasillaStyleText}>{this.props.valor}</Text>
			</TouchableHighlight>
		)
	}
});
module.exports = Casilla;
