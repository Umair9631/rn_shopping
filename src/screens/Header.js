import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Header extends Component {

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>{this.props.title} </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'darkslateblue',
    },
    text:{
        color: '#fff',
        fontSize: 23,
        textAlign: 'center',      
    },
});