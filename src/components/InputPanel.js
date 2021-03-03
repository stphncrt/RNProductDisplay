import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

const InputPanel = (props) => {
  const sendReset = () => {
    props.sendText(inputText);
    setInputText('');
  };
  const [inputText, setInputText] = useState('');
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          value={inputText} //state'i temizleyince Input daki değer de temizlensin
          placeholder="Arama.."
          onChangeText={(value) => setInputText(value)}
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={sendReset}>
        <Text style={{textAlign: 'center'}}>Choose</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputPanel;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 5,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#ede7f6',
  },
  buttonContainer: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: '#bbdefb',
  },
});
