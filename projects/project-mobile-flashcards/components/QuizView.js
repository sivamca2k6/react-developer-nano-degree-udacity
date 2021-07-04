import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,Button,Animated } from 'react-native'
import { gray,blue,white,purple,orange,lightPurp,pink} from '../utils/colors'
import { connect } from 'react-redux';

class QuizView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          onAnswerCard: false
        }
      }

    componentWillMount() {
        this.animatedValue = new Animated.Value(0);
        this.value = 0;
        this.animatedValue.addListener(({ value }) => {
          this.value = value;
        })
        this.frontInterpolate = this.animatedValue.interpolate({
          inputRange: [0,180],
          outputRange: ['0deg', '180deg'],
        })
        this.backInterpolate = this.animatedValue.interpolate({
          inputRange: [0,180],
          outputRange: ['180deg', '360deg'],
        })
      }

    onShowAnswer = () =>{
        if (this.value >= 90) {
            this.setState({onAnswerCard : true})
            Animated.timing(this.animatedValue,{
              toValue: 0,
              friction: 8,
              tension: 10,
              useNativeDriver: true
            }).start();
          } else {
            this.setState({onAnswerCard : false})
            Animated.timing(this.animatedValue,{
              toValue: 180,
              friction: 8,
              tension: 10,
              useNativeDriver: true
            }).start();
          }
    }
    

    render() {
        const frontAnimatedStyle = {
            transform: [
              { rotateY: this.frontInterpolate }
            ]
          }
          const backAnimatedStyle = {
            transform: [
              { rotateY: this.backInterpolate }
            ]
          }

        const {deckItem,navigation} = this.props
        
    return(
        <View style={styles.container}>

            <View>
                <Animated.View style={[styles.flipCard, frontAnimatedStyle]}>
                    <Text style={{fontSize: 25,height: 74,}}>Question: {deckItem.questions[0].question}</Text>
                </Animated.View>
                <Animated.View style={[backAnimatedStyle, styles.flipCard, styles.flipCardBack]}>
                    <Text style={{fontSize: 20,height: 54,}}>Answer: {deckItem.questions[0].answer}</Text>
                </Animated.View>
            </View>
             <TouchableOpacity onPress={this.onShowAnswer} >
                <Text style ={{ color:'orange',fontSize: 16,}}>{this.state.onAnswerCard ? 'Show Answer' : 'Show Question' }</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style = {[styles.button,{backgroundColor:lightPurp}]}  >
                <Text style ={{ color:'white'}}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {[styles.button,{backgroundColor:pink}]}  >
                     <Text style ={{ color:'white'}}>InCorrect</Text>
            </TouchableOpacity>
        </View>
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
    button: {
        alignItems: "center",
        justifyContent: 'center',
        width : 150,
        backgroundColor: blue,
        padding: 10,
        marginTop: 17,
        marginBottom: 17,
      },
      flipCard: {
        width: 300,
        height: 300,
        paddingTop: 22,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        backfaceVisibility: 'hidden',
      },
      flipCardBack: {
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
      },
  });

function mapStateToProps (state, { route }) {
    const {deckItem} = route.params
  return {
    deckItem: state[deckItem.title]
  }
}

export default connect(mapStateToProps)(QuizView);