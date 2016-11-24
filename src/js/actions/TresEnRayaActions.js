var TresEnRayaDispatcher = require('../dispatchers/TresEnRayaDispatcher');
var Constants = require('../constants/TresEnRayaConstants');

module.exports = {
  jugarPosicion: function(x,y) {
    TresEnRayaDispatcher.dispatch({
      type: Constants.ActionTypes.JUGAR_POSICION,
      x : x,
      y : y,
    });
  },
  nuevaPartida: function(){
    TresEnRayaDispatcher.dispatch({
      type: Constants.ActionTypes.NUEVA_PARTIDA,
      turno: Constants.JUGADORX,
			valores: [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']],
      xMoves:0,
      yMoves:0,
      history: new Array(),
    });
  },
  cargarPartida: function(value){
    TresEnRayaDispatcher.dispatch({
      type: Constants.ActionTypes.CARGAR_PARTIDA,
      turno: value.turno,
			valores: value.valores,
      xMoves: value.xMoves,
      yMoves: value.yMoves,
      history: value.history,
    });
  },
};
