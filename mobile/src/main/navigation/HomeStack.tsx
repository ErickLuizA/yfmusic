import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { makeHome } from '../factories/screens/HomeFactory'

const { Navigator, Screen } = createStackNavigator()

function HomeStack() {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        name="Home"
        component={makeHome}
        options={{ headerShown: false }}
      />
      {/* <Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      /> */}
    </Navigator>
  )
}

export default HomeStack