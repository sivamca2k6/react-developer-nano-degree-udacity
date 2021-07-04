import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,Button} from 'react-native'
import { gray,blue,white,purple,orange,lightPurp,pink} from '../utils/colors'
import { connect } from 'react-redux';
import { clear_quiz_score } from '../actions'
import {clearQuizScoreApi} from '../utils/api'

class DeckView extends React.Component {

    onStartQuiz = () => {
        const {deckItem,navigation,dispatch} = this.props
       
         deckItem.score = 0;
         clearQuizScoreApi(deckItem.title).then(
             () => dispatch(clear_quiz_score(deckItem.title)));

        navigation.navigate('QuizView',{deckItem:deckItem,currentQuestionCount : 0})
    }

    render() {
    const {deckItem,navigation} = this.props
    return(
        <View style={styles.container}>
            <Text style={{ fontSize: 68, height: 100,}}> {deckItem.title}</Text>
            <Text style={{ fontSize: 25,height: 54,color:'gray'}}> No of Cards : {deckItem.questions.length}</Text>
            <Text style={{ fontSize: 25,height: 54,color:'gray'}}> Previous Score : {deckItem.score}</Text>
            <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('AddCardView',{deckItem:deckItem})} >
                <Text style ={{ color:'white'}}>Add Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress={this.onStartQuiz} >
                     <Text style ={{ color:'white'}}>Start Quiz</Text>
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
  });

function mapStateToProps (state, { route }) {
    const {deckItem} = route.params
  return {
    deckItem: state[deckItem.title]
  }
}

export default connect(mapStateToProps)(DeckView);
