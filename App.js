import 'react-native-gesture-handler';
import React from 'react';

import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import About from './components/About';
import AddReview from './components/AddReview';
import CourseDetails from './components/CourseDetails';
import CourseList from './components/CoursesList';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator style={styles.container} initialRouteName='COURSELIST'>
      <Stack.Screen name="COURSELIST" component={CourseList} />
      <Stack.Screen name="CORSEDETAILS" component={CourseDetails} />
      <Stack.Screen name="ADDREVIEW" component={AddReview} />
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator initialRouteName='Courses'>
        <Tabs.Screen name="Courses" component={StackNavigator} options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name='ios-home' color={color} size={size} />
      )
    }}/>
        <Tabs.Screen name="About us" component={About} options={{
      tabBarIcon: ({ color, size }) => (
        <Ionicons name='ios-person' size={size} color={color} />
      )
    }}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
});
