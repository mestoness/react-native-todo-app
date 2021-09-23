import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {MainContext, useContext} from './../../context';
import Style from './../../styles/main';

const index = ({navigation}) => {
  const {todo, setTodo} = useContext(MainContext);

  return (
    <View style={{padding: 10}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Add Todo')}
        style={Style.button}>
        <Text>Add Todo</Text>
      </TouchableOpacity>
      <View style={{marginTop: 10, marginBottom: 100}}>
        <FlatList
          data={todo}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Details', {todoIndex: index})
              }>
              <View style={Style.cardBox}>
                <Text>
                  {item.title.length > 20
                    ? item.title.substring(0, 20) + '...'
                    : item.title}
                </Text>
                <Text style={Style.cardDesc}>
                  {item.description.length > 30
                    ? item.description.substring(0, 30) + '...'
                    : item.description}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item, i) => i}
        />
      </View>
    </View>
  );
};

export default index;
