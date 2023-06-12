import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import axios from 'axios';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = async () => {
    if (inputText.trim() !== '') {
      try {
        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            messages: [
              { role: 'system', content: 'You are a user' },
              { role: 'system', content: inputText },
            ],
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer YOUR_API_KEY',
            },
          }
        );

        const { choices } = response.data;
        const botReply = choices[0].message.content;

        setMessages([...messages, inputText, botReply]);
        setInputText('');
      } catch (error) {
        console.error('API Request Error:', error);
      }
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={{ flex: 1, height: 40, borderWidth: 1, paddingHorizontal: 10 }}
          value={inputText}
          onChangeText={text => setInputText(text)}
        />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

export default ChatScreen;
