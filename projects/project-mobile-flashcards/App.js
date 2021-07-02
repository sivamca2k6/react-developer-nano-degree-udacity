import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';;
import DeckListView from './components/DeckListView'
import NewDeck from './components/NewDeck';
import DeckView from './components/DeckView';
import QuizView from  './components/QuizView'
import { createStackNavigator } from '@react-navigation/stack';
import { gray, blue,white,purple,orange,lightPurp,pink} from './utils/colors'


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
                               
      </Stack.Navigator>
)};

const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
      <NavigationContainer >
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home}  ></Tab.Screen>
          <Tab.Screen name = "New Deck" component={NewDeck}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
