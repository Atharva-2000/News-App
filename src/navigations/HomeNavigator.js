import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import ReadNews from '../screens/ReadNews'

const Stack = createStackNavigator()

const HomeNavigator = () => {
  return (
     <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='home' component={Home}/>
        <Stack.Screen name='read-news' component={ReadNews} />
     </Stack.Navigator>
  )
}

export default HomeNavigator