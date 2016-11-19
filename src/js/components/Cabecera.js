import React, {Component} from 'react';
import {StyleSheet,Text, View} from 'react-native';

var Cabecera = React.createClass({
	render: function(){
		return(
			<View>
				<Text style={styles.cabecera}>
					{this.props.texto}
				</Text>
				<Text>Movimientos X:{this.props.xMoves} - Movimientos y:{this.props.yMoves}</Text>
			</View>
		)
	}
});

const styles = StyleSheet.create({
	cabecera: {
		padding: 5,
		fontSize: 25,
		marginBottom:20
	}
});

module.exports = Cabecera;
