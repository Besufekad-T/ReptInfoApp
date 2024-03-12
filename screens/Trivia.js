import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Platform, View } from "react-native";
import { getChat } from "../assets/utils/getChatGPT";

const CHATBOT_USER_OBJ = {
  _id: 2,
  name: "ReptTrivia",
  avatar:
    "https://img.freepik.com/premium-photo/chameleon-sitting-branch-colorful-reptile-its-natural-habitat-generative-ai_634358-648.jpg?w=1800",
};

const prompt = [
  {
    role: "system",
    content:
      "You are now Reptemoji, the interactive AI from Reptinfo! 🦎🤖, Play a game with the user where you will show them combination of emojis(atleast three emoji combinations) and they will guess the species of the reptile from the given muliple choices,make it more specific",
    //my prompt for ChatGPT for trivia game
  },
];

export default function Trivia() {
  const [messages, setMessages] = useState([]); // for GiftedChat
  const [messagesGPT, setMessagesGPT] = useState(prompt); // for ChatGPT

  async function fetchInitialMessage() {
    const response = await getChat(prompt);
    const message = response.choices[0].message;
    const content = response.choices[0].message.content;
    setMessagesGPT(messagesGPT.concat(message));
    addBotMessage(content);
  }

  useEffect(() => {
    fetchInitialMessage();
  }, []);

  const addNewMessage = (newMessages) => {
    console.log(messages);
    setMessages((previousMessages) => {
      // console.log("PREVIOUS MESSAGES:", previousMessages);
      // console.log("NEW MESSAGE:", newMessages);
      return GiftedChat.append(previousMessages, newMessages);
    });
  };

  const addBotMessage = (text) => {
    addNewMessage([
      {
        _id: Math.round(Math.random() * 1000000),
        text: text,
        createdAt: new Date(),
        user: CHATBOT_USER_OBJ,
      },
    ]);
  };

  const respondToUser = async (userMessages) => {
    const userMessageText = userMessages[0].text;
    const messageObj = {
      role: "user",
      content: userMessageText,
    };
    const messageHistory = messagesGPT.concat(messageObj);
    let response = await getChat(messageHistory);
    const messageResponse = response.choices[0].message;
    const content = messageResponse.content;

    setMessagesGPT(messageHistory.concat(messageResponse));
    addBotMessage(content);
  };

  const onSend = useCallback((messages = []) => {
    addNewMessage(messages);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#90EE90" }}>
      <GiftedChat
        messages={messages}
        onSend={(messages) => {
          onSend(messages);
          setTimeout(() => respondToUser(messages), 1000);
        }}
        user={{
          _id: 1,
          name: "Besu",
        }}
        renderUsernameOnMessage={true}
      />
    </View>
  );
}
