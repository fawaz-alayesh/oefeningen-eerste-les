import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Opdracht1 from './opdrachten/Opdracht1';
import Opdracht2 from './opdrachten/Opdracht2';
import Opdracht3 from './opdrachten/Opdracht3';
import Opdracht4 from './opdrachten/Opdracht4';
import Opdracht5 from './opdrachten/Opdracht5';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Opdracht 1" component={Opdracht1} />
        <Tab.Screen name="Opdracht 2" component={Opdracht2} />
        <Tab.Screen name="Opdracht 3" component={Opdracht3} />
        <Tab.Screen name="Opdracht 4" component={Opdracht4} />
        <Tab.Screen name="Opdracht 5" component={Opdracht5} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}