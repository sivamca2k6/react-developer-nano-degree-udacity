import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,Button} from 'react-native'

const DeckView = ({route,navigation}) =>{
    const {deckItem} = route.params
    return(
        <View style={styles.container}>
            <Text style={{ fontSize: 68, height: 100,}}> {deckItem.title}</Text>
            <Text style={{ fontSize: 25,height: 74,}}> No of Cards : {deckItem.questions.length}</Text>
            <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('Details')} >
                <Text>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('Details')} >
                     <Text>Start Quiz</Text>
            </TouchableOpacity>
                          
        </View>
    )
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
        backgroundColor: "#DDDDDD",
        padding: 10,
        marginTop: 17,
        marginBottom: 17,
      },
  });

  export default DeckView;