import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { db } from '../firebase'; // Assuming you've exported your Firestore instance as 'db'


const NewPostScreen = () => {
  const [content, setContent] = useState('');

  const handlePost = async () => {
    if (content.trim() === '') {
      Alert.alert('Error', 'Please enter some content for your post.');
      return;
    }

    try {
      // Save new post data to Firestore
      await db.collection('posts').add({
        content,
        timestamp: new Date(),
      });

      // Clear the content input field
      setContent('');

      Alert.alert('Success', 'Your post has been submitted successfully.');
    } catch (error) {
      console.error('Error adding document: ', error);
      Alert.alert('Error', 'Failed to submit your post. Please try again later.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        multiline
        placeholder="Enter your post content..."
        value={content}
        onChangeText={setContent}
        style={{ width: '80%', height: 200, borderWidth: 1, borderColor: 'gray', padding: 10 }}
      />
      <TouchableOpacity onPress={handlePost} style={{ marginTop: 20, backgroundColor: 'green', padding: 10 }}>
        <Text style={{ color: 'white', fontSize: 16 }}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewPostScreen;
