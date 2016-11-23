import React, { Component } from 'react';
import { View } from 'react-native';
import History from './src/js/components/History';
import MyButton from './src/js/components/MyButton';

var HistoryScene = React.createClass({
  render: function(){
    return(
      <View style={{flex: 1, margin: 10}}>
        <History style={{flex: 1}} />
        <MyButton onPress={this.props.onBack} text={"Volver"}/>
      </View>
    )
  }
});
module.exports = HistoryScene;
