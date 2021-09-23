import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {MainContext, useContext} from './../context';
import HomeScreen from './../screens/Home/index';
import TodoListScreen from './../screens/TodoList/index';
import LoginScreen from './../screens/Login/index';
const BottomTabs = () => {
  const BottomTab = createBottomTabNavigator();
  const {loginStatus, setloginStatus} = useContext(MainContext);

  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#92CAFF',
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />

      {!loginStatus ? (
        <BottomTab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="login" color={color} size={size} />
            ),
            headerShown: false,
          }}
        />
      ) : (
        <BottomTab.Screen
          name="Todo List"
          component={TodoListScreen}
          options={{
            tabBarLabel: 'Todo List',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="format-list-bulleted"
                color={color}
                size={size}
              />
            ),
            headerShown: false,
          }}
        />
      )}
    </BottomTab.Navigator>
  );
};
export default BottomTabs;
