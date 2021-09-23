import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {MainContext, useContext} from './../../context';
import Style from './../../styles/main';
export default function index({navigation}) {
  const {loginStatus, setloginStatus} = useContext(MainContext);

  return (
    <View style={Style.center}>
      <Text style={{fontSize: 30, marginBottom: 20}}>Welcome Todo App</Text>
      {!loginStatus ? (
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={Style.button}>
          <Text>Get Started</Text>
        </TouchableOpacity>
      ) : (
        <>
          <TouchableOpacity
            onPress={() => navigation.navigate('Todo List')}
            style={Style.button}>
            <Text>Get Todo List Pages</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setloginStatus(false)}
            style={Style.button}>
            <Text>Account Logout</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
