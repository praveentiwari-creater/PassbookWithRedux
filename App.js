import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';
import Details_Page from './Screens/Details_Page';
import {Provider} from 'react-redux';
import store from './redux/store';


const Stack = createStackNavigator();
function App(){
  return(
    <Provider store={store}>
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="Details_Page" component={Details_Page} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}
export default App;