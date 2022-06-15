import 'react-native-gesture-handler';

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';


import Cadastro from './src/pages/Cadastro';
import Home from './src/pages/Home';
import Listagem from './src/pages/Listagem';


const Tab = createBottomTabNavigator();




const icones = {
  Inicio: {
    name: 'home'
  },
  Cadastro: {
    name: 'folder-o'
  },
  Listagem: {
    name: 'bars'

  }
}




export default function App() {
  return (



    <NavigationContainer>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            const { name } = icones[route.name];
            return <Icon name={name} color='#3c6232' size={20} />
          }
        })}


      >
        <Tab.Screen name="Inicio" component={Home} />
        <Tab.Screen name="Cadastro" component={Cadastro} />
        <Tab.Screen name="Listagem" component={Listagem} />


      </Tab.Navigator>

    </NavigationContainer>



  );
}