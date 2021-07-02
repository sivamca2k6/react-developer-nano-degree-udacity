import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

const NewDeck = () => {
  const [text, setText] = useState('');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text}
      </Text>
    </View>
  );
}

export default NewDeck; 