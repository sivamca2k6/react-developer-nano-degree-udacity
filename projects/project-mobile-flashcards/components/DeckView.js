import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,Button} from 'react-native'
import { gray,blue,white,purple,orange,lightPurp,pink} from '../utils/colors'

const DeckView = ({route,navigation}) =>{
    const {deckItem} = route.params
    return(
        <View style={styles.container}>
            <Text style={{ fontSize: 68, height: 100,}}> {deckItem.title}</Text>
            <Text style={{ fontSize: 25,height: 74,}}> No of Cards : {deckItem.questions.length}</Text>
            <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('QuizView',{deckItem:deckItem})} >
                <Text style ={{ color:'white'}}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('QuizView',{deckItem:deckItem})} >
                     <Text style ={{ color:'white'}}>Start Quiz</Text>
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
        justifyContent: 'center',
        width : 150,
        backgroundColor: blue,
        padding: 10,
        marginTop: 17,
        marginBottom: 17,
      },
  });

  export default DeckView;
