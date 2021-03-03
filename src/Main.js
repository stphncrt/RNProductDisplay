import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Button from './components/Button';
import InputPanel from './components/InputPanel';

const Main = () => {
  const [username, setUsername] = useState('');
  return (
    <View>
      <Text style={{fontSize: 50}}>Hello {username} </Text>
      <Button title="Press me" color="#0099CC" users={[1, 2, 3, 4, 5]} />
      <InputPanel sendText={(myvalue) => setUsername(myvalue)} />
    </View>
  );
};

export default Main;
