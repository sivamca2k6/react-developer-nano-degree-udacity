import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,Button} from 'react-native'
import { gray,blue,white,purple,orange,lightPurp,pink} from '../utils/colors'
import { connect } from 'react-redux';
import { clear_quiz_score } from '../actions'
import {clearQuizScoreApi} from '../utils/api'
import { setLocalNotification, clearLocalNotification } from '../utils/helpers';
import * as Device from 'expo-device';

class QuizResultView extends React.Component {

    componentDidMount() {
      
      if (Device.isDevice && Device.brand !== null) {
        clearLocalNotification()
        .then(setLocalNotification)
      }
      else
      { // notifications not supported in the web
        console.log('Must use physical device for Local Notifications');
      }
    }

    onReStartQuiz = () => {
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
            <Text style={{ fontSize: 68, height: 100,}}>Quiz Result</Text>
            <Text style={{ fontSize: 38, height: 74,}}> {deckItem.title}</Text>
            <Text style={{ fontSize: 25,height: 54,color:'gray'}}> No of Quuestion : {deckItem.questions.length}</Text>
            <Text style={{ fontSize: 25,height: 54,color:'gray'}}> Correct Answer : {deckItem.score}</Text>
            <Text style={{ fontSize: 25,height: 54,color:'gray'}}> Score  : {deckItem.score / deckItem.questions.length * 100} % </Text>
            <TouchableOpacity style = {styles.button} onPress={this.onReStartQuiz} >
                     <Text style ={{ color:'white'}}>ReStart Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.button} onPress={ ()=> { navigation.navigate('DeckListView') }} >
                     <Text style ={{ color:'white'}}>Home</Text>
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

export default connect(mapStateToProps)(QuizResultView);
