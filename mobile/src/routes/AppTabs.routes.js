import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import HomeStack from './HomeStack';
import PlaylistStack from './PlaylistStack'
import FavoritesScreen from '../screens/Favorites';
import PlayingScreen from '../screens/Playing';
import UserScreen from '../screens/User';

const Tab = createBottomTabNavigator();

function AppTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        safeAreaInsets: {
          bottom: 0,
        },
        style: {
          backgroundColor: '#131418',
          height: 64,
          borderTopColor: 'transparent',
        },
        iconStyle: {
          flex: 0,
          width: 50,
          height: 20,
        },
        activeTintColor: '#fff',
        inactiveTintColor: '#92929c',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          title: '',
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" size={size} color={color} />
          ),
          title: '',
        }}
      />

      <Tab.Screen
        name="Ṕlaying"
        component={PlayingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign
              name="playcircleo"
              size={size + 20}
              color={color}
              style={{ marginBottom: 20 }} // eslint-disable-line react-native/no-inline-styles
            />
          ),
          title: '',
        }}
      />

      <Tab.Screen
        name="Playlist"
        component={PlaylistStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="folderopen" size={size} color={color} />
          ),
          title: '',
        }}
      />

      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
          title: '',
        }}
      />
    </Tab.Navigator>
  );
}

export default AppTabs;
