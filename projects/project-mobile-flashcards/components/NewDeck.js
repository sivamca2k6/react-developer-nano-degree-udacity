import React, { Component } from 'react';
import { View, Text, TextInput,StyleSheet, TouchableOpacity} from 'react-native'
import { gray,blue,white,purple,orange,lightPurp,pink} from '../utils/colors'
import {addDeckApi} from '../utils/api'
import { connect } from 'react-redux'
import { add_deck } from '../actions'


class NewDeck extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

 onAdd = (title) => {
    addDeckApi(title)
    this.props.dispatch(add_deck(title))
    this.setState({text : ''})
    this.props.navigation.navigate('Home') //not working??
    
    //alert('new deck added')
  }

  render () {
    const {text} = this.state
    return (
      <View style={styles.container}>
        <Text style={{padding: 10, fontSize: 22}}>
          Deck Title :
        </Text>
        <TextInput
          style={styles.input}
          placeholder="please enter title !"
          text = {text}
          onChangeText={text => this.setState({text : text})}
          defaultValue={text}
        />
        <TouchableOpacity style = {styles.button} disabled = {text === ''}
                          onPress={() => this.onAdd(text) } >
              <Text style ={{ color:'white'}}>Add</Text>
        </TouchableOpacity>
        
      </View>
  )}
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   alignItems: 'center',
   justifyContent: 'center',
  },
  button: {
      alignItems: "center",
      justifyContent: 'center',
      width : 150,
      backgroundColor: blue,
      padding: 10,
      marginTop: 17,
      marginBottom: 17,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
});

export default connect()(NewDeck);