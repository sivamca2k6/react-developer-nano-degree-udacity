import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList,TouchableOpacity } from 'react-native'
import RenderDeckListItem from './RenderDeckListItem'
import { gray,blue,white,purple,orange,lightPurp,pink} from '../utils/colors'
import {clearDecksApi,getDecksApi} from '../utils/api'
import { connect } from 'react-redux'
import { receive_deck_list,clear_deck } from '../actions'
import AppLoading from 'expo-app-loading'

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
  });


class DeckListView extends Component { 
    
    constructor(props) {
        super(props);
        this.state = {
          ready: false
        }
      }

    clearDecks = () =>{
      const { dispatch } = this.props
      clearDecksApi();
      dispatch(clear_deck())
    }

    componentDidMount(){
      const { dispatch } = this.props
      getDecksApi().then((decks) => 
        dispatch(receive_deck_list(decks))
      ).then(() => this.setState(() => ({
        ready: true
      })));
    }

    render(){
        const { ready } = this.state;
        if (ready === false) {
          return <AppLoading />
        }

      const {deckList} = this.props
      //console.log(deckList)

        return (
            <View style={styles.container}>
              <FlatList
                data = {Object.keys(deckList)}
                renderItem={({ item }) => (
                    <RenderDeckListItem deckItem ={deckList[item]} navigation={this.props.navigation} />
                    )}
              />
            <TouchableOpacity style = {styles.button} 
                        onPress={() => this.clearDecks() } >
            <Text style ={{ color:'white'}}>Clear All</Text>
            </TouchableOpacity>
            </View>
            
          );
    }
}


function mapStateToProps (state) {
  return {
    deckList : state
  }
}

export default connect(mapStateToProps)(DeckListView);
