import React from 'react'
import { View,Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView , CheckBox} from 'react-native';
import { connect } from 'react-redux';
import { gray,blue,white,purple,orange,lightPurp,pink} from '../utils/colors'
import { add_Card_To_Deck } from '../actions'
import { addCardToDeckApi } from '../utils/api'
import { CommonActions } from '@react-navigation/native';

class AddCardView extends React.Component {
  state = {
    question: '',
    answer: '',
    isAnswerCorrect : true
  }
  onPress = () => {
    const { dispatch, title } = this.props
    const { question, answer,isAnswerCorrect } = this.state

    addCardToDeckApi(title, {question, answer,isAnswerCorrect})
    .then(() => dispatch(add_Card_To_Deck(title, {question, answer,isAnswerCorrect})))
    .then(() => {
      this.props.navigation.dispatch(CommonActions.goBack());
    })
  }
  render() {
    const { question, answer } = this.state
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>

        <Text style={styles.titleText}> {this.props.title}</Text>

        <TextInput  style={styles.input}  placeholder="enter a question here..."
        onChangeText={(text) => this.setState(() => ({question: text}))}  value={this.state.question} />

        <TextInput  style={styles.input} placeholder="enter the answer here..."
        onChangeText={(text) => this.setState(() => ({answer: text}))} value={this.state.answer} />

        <View style={styles.checkboxContainer}>
          <CheckBox   style={styles.checkbox}  value={this.state.isAnswerCorrect} onValueChange={(value) => this.setState(() => ({isAnswerCorrect: value}))}    />
          <Text style={styles.label}>Is Correct Answer ?? </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={this.onPress} disabled = { question === '' || answer ==='' }>
          <Text  style ={{ color:'white'}}>SUBMIT</Text>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    alignItems: 'center',
    justifyContent: 'center',
   },
  input: {
    height: 40,
    width: 240,
    margin: 12,
    borderWidth: 1,
  },
  titleText: {
    fontSize: 40,
    color : purple,
    margin: 12,
    fontWeight: "bold"
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
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
});

function mapStateToProps (state, { route }) {
    const {deckItem} = route.params
  return {
    title: deckItem.title
  }
}

export default connect(mapStateToProps)(AddCardView);