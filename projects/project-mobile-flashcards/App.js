import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';;
import DeckListView from './components/DeckListView'
import NewDeck from './components/NewDeck';
import DeckView from './components/DeckView';
import QuizView from  './components/QuizView'
import AddCardView from  './components/AddCardView'
import QuizResultView from './components/QuizResultView'
import { createStackNavigator } from '@react-navigation/stack';
import { gray, blue,white,purple,orange,lightPurp,pink} from './utils/colors'
import reducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { setLocalNotification } from './utils/helpers'
import * as Device from 'expo-device';


const Stack = createStackNavigator();
const Home = () =>{
  return (
      <Stack.Navigator>
        <Stack.Screen name="DeckListView" component={DeckListView} 
                      options={{ title: 'Deck List', 
                      headerTitleStyle: { alignSelf: 'center' }, headerStyle: {backgroundColor: orange,}, headerTintColor: white }} /> 
        <Stack.Screen name = "DeckView" component={DeckView}        
                      options={({ route }) => ({ title: route.params.deckItem.title, 
                      headerStyle: {backgroundColor: orange,}, headerTintColor: white  })} />
        <Stack.Screen name = "QuizView" component={QuizView}        
                      options={({ route }) => ({ title: 'Quiz', 
                      headerStyle: {backgroundColor: orange,}, headerTintColor: white  })} />
        <Stack.Screen name = "AddCardView" component={AddCardView}        
                      options={({ route }) => ({ title: 'Add Card', 
                      headerStyle: {backgroundColor: orange,}, headerTintColor: white  })} />
        <Stack.Screen name = "QuizResultView" component={QuizResultView}        
                      options={({ route }) => ({ title: 'Quiz Result', 
                      headerStyle: {backgroundColor: orange,}, headerTintColor: white  })} />
                               
      </Stack.Navigator>
)};

const Tab = createMaterialTopTabNavigator();
export default class App extends React.Component {
  componentDidMount() {

    if (Device.isDevice && Device.brand !== null) { 
      setLocalNotification()
    }
    else
    { // notifications not supported in the web
      console.log('Must use physical device for Local Notifications');
    }

  }
  render() {
  return (
    <Provider store={createStore(reducer)}>
      <NavigationContainer >
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home}  initialRouteName="Home" ></Tab.Screen>
          <Tab.Screen name = "New Deck" component={NewDeck}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )};
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
