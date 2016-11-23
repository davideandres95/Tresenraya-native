import React, {Component} from 'react';
import { Navigator } from 'react-native';


var TresEnRayaStore = require('../stores/TresEnRayaStore');
var TresEnRayaActions = require('../actions/TresEnRayaActions');

import IndexScene from '../../../inicio';
import PartidaScene from '../../../partida';
import HistoryScene from '../../../history';

function getAppStateFromStore(){
	return{
		turno : TresEnRayaStore.getTurno(),
		valores: TresEnRayaStore.getValores(),
		xMoves: TresEnRayaStore.getxMoves(),
		yMoves: TresEnRayaStore.getyMoves()
	};
}

var App = React.createClass({
	getInitialState: function () {
		return getAppStateFromStore();
	},
	componentDidMount(){
		TresEnRayaStore.addChangeListener(this._onChange);
	},
	componentWillUnmount(){
		TresEnRayaStore.removeChangeListener(this._onChange);
	},
	_onChange: function(){
		var newState = getAppStateFromStore();
		this.setState(newState);
	},
	render: function () {
 		const routes = [
			{title: 'Index', index:0},
			{title: 'Partida', index:1},
			{title: 'Historial', index:2}
		];
 		return (
 			<Navigator initialRoute={routes[0]} initialRouteStack={routes}
				renderScene={(route, navigator) => {
					var onForward = function(){
						const nextIndex = route.index + 1;
						if (typeof routes[nextIndex] == "object"){
							navigator.push(routes[nextIndex])
						}
					}
					var onBack = function(){
						if(route.index > 0){
							navigator.pop();
						}
					}
					switch (route.index) {
						case 0:
							return <IndexScene onForward={onForward} onBack={onBack}/>
						case 1:
							return <PartidaScene onForward={onForward} onBack={onBack}/>
						case 2:
							return <HistoryScene onForward={onForward} onBack={onBack}/>
					}
				}}
			/>
		);
	}
});

module.exports = App;
