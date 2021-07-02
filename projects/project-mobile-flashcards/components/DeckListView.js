import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList,TouchableOpacity } from 'react-native'
import {getDecks} from '../utils/api'
import RenderDeckListItem from './RenderDeckListItem'

const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22,
     alignItems: 'center',
     justifyContent: 'center',
    },
  });


class DeckListView extends Component { 
    
    constructor(props) {
        super(props);
        this.state = {
            deckList: {}
        };
      }

    componentDidMount(){
        this.setState ( {
            deckList : getDecks()
        })
    }

    render(){

        const {deckList} = this.state
        //console.log(deckList)

        return (
            <View style={styles.container}>
              <FlatList
                data = {Object.keys(deckList)}
                renderItem={({ item }) => (
                    <RenderDeckListItem deckItem ={deckList[item]} navigation={this.props.navigation} />
                    )}
              />
            </View>
          );
    }
}

export default DeckListView;

