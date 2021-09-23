import React, {useState} from 'react';
import {MainContext} from './context';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

/****************/
import HomeScreen from './screens/Home/index';
import TodoListScreen from './screens/TodoList/index';
import LoginScreen from './screens/Login/index';
import AddTodoScreen from './screens/AddTodo/index';
import DetailsScreen from './screens/Details/index';
import EditScreen from './screens/Edit/index';
import BottomTabs from './components/bottomTabs';

const Stack = createStackNavigator();

const App = () => {
  const [loginStatus, setloginStatus] = useState(false);
  const [todo, setTodo] = useState([
    {
      title: 'Bilgisiyarı Aç',
      description: 'Projeleri Teslim etmen gerekiyor',
    },
  ]);

  const data = {
    loginStatus,
    setloginStatus,
    todo,
    setTodo,
  };
  return (
    <>
      <MainContext.Provider value={data}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Root"
              component={BottomTabs}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Todo List"
              component={TodoListScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Add Todo" component={AddTodoScreen} />
            <Stack.Screen name="Edit Todo" component={EditScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </MainContext.Provider>
    </>
  );
};

export default App;
