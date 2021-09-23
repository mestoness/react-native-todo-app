import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import {MainContext, useContext} from './../../context';
import Style from './../../styles/main';

const index = ({navigation}) => {
  const {loginStatus, setloginStatus} = useContext(MainContext);
  const [username, setusername] = useState(null);
  const [password, setpassword] = useState(null);
  const loginInfo = {
    username: 'mestoness',
    password: '123456',
  };
  const login = () => {
    if (username == loginInfo.username && password == loginInfo.password) {
      setloginStatus(true);
      alert('Login success!');
      setTimeout(() => {
        navigation.jumpTo('Todo List');
      }, 2000);
    } else {
      alert('Login error!');
    }
  };
  return (
    <View style={{marginTop: 50, margin: 10}}>
      <TextInput
        value={username}
        placeholder="Enter your Username"
        onChangeText={setusername}
        style={Style.input}></TextInput>
      <TextInput
        value={password}
        placeholder="Enter your Password"
        onChangeText={setpassword}
        secureTextEntry
        style={Style.input}></TextInput>
      <TouchableOpacity onPress={login} style={Style.button}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
export default index;
