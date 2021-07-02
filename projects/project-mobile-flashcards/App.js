import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';;
import DeckListView from './components/DeckListView'
import NewDeck from './components/NewDeck';
import DeckView from './components/DeckView';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

const Home = () =>{
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={DeckListView} ></Stack.Screen>
        <Stack.Screen name = "DeckView" component={DeckView}></Stack.Screen>
      </Stack.Navigator>
);
}


const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
      <NavigationContainer >
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} ></Tab.Screen>
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
