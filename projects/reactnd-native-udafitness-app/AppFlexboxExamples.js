import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'

class AppFlexboxExamples  extends Component {
  render() {
    return (
      <View style={styles.containerRoot}>
        <View style={styles.container}>
          <View style={styles.box}/>
          <View style={[styles.box, {alignSelf: 'flex-start'}]}/>
          <View style={styles.box}/>
        </View>
          <View style={styles.container}>
            <View style={[styles.box, {flex: 1}]}/>
            <View style={[styles.box, {flex: 2}]}/>
            <View style={[styles.box, {flex: 1}]}/>
          </View>
          <View style={{flex: 1}}>
          <View style={{flex: 1, backgroundColor: 'red'}} />
          <View style={{flex: 2, backgroundColor: 'green'}} />
          <View style={{flex: 3, backgroundColor: 'blue'}} />
        </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  containerRoot: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  box: {
    height: 50,
    width:50,
    backgroundColor: '#e76e63',
    margin: 10,
  }
})

export default AppFlexboxExamples;