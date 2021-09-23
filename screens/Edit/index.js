import React, {useState} from 'react';
import {TextInput, View, TouchableOpacity, Text} from 'react-native';
import {MainContext, useContext} from './../../context';
import Style from './../../styles/main';

const index = ({navigation, route}) => {
  const {todo, setTodo} = useContext(MainContext);
  const todoIndex = route.params.todoIndex;
  const [Title, setTitle] = useState(todo[todoIndex].title);
  const [Description, setDescription] = useState(todo[todoIndex].description);

  const editTodo = async () => {
    if (Title != null && Description != null && todo[todoIndex]) {
      const data = todo;
      data[todoIndex].title = Title;
      data[todoIndex].description = Description;
      setTodo(data);
      setTitle(null);
      setDescription(null);
      alert('Success!');
      navigation.navigate('Todo List');
    }
  };

  return (
    <View style={{marginTop: 50, margin: 10}}>
      {todo[todoIndex] ? (
        <>
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
          <TouchableOpacity onPress={editTodo} style={Style.button}>
            <Text>Edit Todo</Text>
          </TouchableOpacity>
        </>
      ) : (
        navigation.navigate('Todo List')
      )}
    </View>
  );
};

export default index;
