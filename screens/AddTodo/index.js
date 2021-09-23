import React, {useState} from 'react';
import {TextInput, View, TouchableOpacity, Text} from 'react-native';
import {MainContext, useContext} from './../../context';
import Style from './../../styles/main';

const index = ({navigation}) => {
  const {todo, setTodo} = useContext(MainContext);
  const [Title, setTitle] = useState(null);
  const [Description, setDescription] = useState(null);
  const addTodo = async () => {
    if (Title != null && Description != null) {
      setTodo([{title: Title, description: Description}, ...todo]);
      setTitle(null);
      setDescription(null);
      alert('Success!');
      setTimeout(() => {
        navigation.navigate('Todo List');
      }, 2000);
    }
  };
  return (
    <View style={{marginTop: 50, margin: 10}}>
      <TextInput
        value={Title}
        placeholder="Enter your Title"
        onChangeText={setTitle}
        style={Style.input}></TextInput>
      <TextInput
        value={Description}
        placeholder="Enter your Description"
        onChangeText={setDescription}
        style={Style.input}></TextInput>
      <TouchableOpacity onPress={addTodo} style={Style.button}>
        <Text>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
