import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {MainContext, useContext} from './../../context';
import Style from './../../styles/main';

const index = ({route, navigation}) => {
  const {todo, setTodo} = useContext(MainContext);
  const todoIndex = route.params.todoIndex;
  const deleteTodo = async () => {
    alert('Successfully deleted');
    const data = todo.filter(function (item, index) {
      return index !== todoIndex;
    });
    setTodo(data);
    navigation.navigate('Todo List');
  };
  return (
    <View style={{padding: 10}}>
      {todo[todoIndex] ? (
        <>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Edit Todo', {todoIndex: todoIndex})
            }
            style={Style.button}>
            <Text>Edit Todo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={deleteTodo} style={Style.button}>
            <Text>Delete Todo</Text>
          </TouchableOpacity>
          <View style={Style.cardBox}>
            <Text>{todo[todoIndex].title}</Text>
            <Text style={Style.cardDesc}>{todo[todoIndex].description}</Text>
          </View>
        </>
      ) : (
        navigation.navigate('Todo List')
      )}
    </View>
  );
};

export default index;
