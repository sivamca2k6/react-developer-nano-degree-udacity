import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,Button} from 'react-native'
import { gray,blue,white,purple,orange,lightPurp,pink} from '../utils/colors'


const onDeckPress = (answer,navigation) =>{
    //navigation.navigate('DeckView',{deckItem:deckItem})
}

const QuizView = ({route,navigation}) =>{
    const {deckItem} = route.params
    return(
        <View style={styles.container}>
             <Text style={{ color:'gray',fontSize: 28, height: 50,}}> {deckItem.questions[0].question}</Text>

             <TouchableOpacity onPress={() => navigation.navigate('Details')} >
                <Text style ={{ color:'orange'}}>Answer</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress={() => onDeckPress('correct',navigation)} >
                <Text style ={{ color:'white'}}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress={() => onDeckPress('incorrect',navigation)} >
                     <Text style ={{ color:'white'}}>InCorrect</Text>
            </TouchableOpacity>
        </View>
    )
}

export default QuizView;

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

