import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function SocialMedia() {
  const [postText, setPostText] = useState('');
  const [media, setMedia] = useState(null);

  const handlePost = () => {
    // Here you can implement logic to handle post submission
    console.log("Posted:", postText);
    console.log("Media:", media);
    // Reset post text and media after posting
    setPostText('');
    setMedia(null);
  }

  const handleMediaUpload = () => {
    // Here you can implement logic to handle media upload
    // This can be integrated with a library like Expo ImagePicker
    // For simplicity, let's assume we just console log the media file URI
    console.log("Media Uploaded:", media);
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Reptile Info Social Media Platform</Text>
      <TextInput
        style={{ height: 100, width: '80%', borderColor: 'gray', borderWidth: 1, marginVertical: 10 }}
        multiline
        placeholder="Write your post here..."
        value={postText}
        onChangeText={text => setPostText(text)}
      />
      <Button
        title="Upload Media"
        onPress={handleMediaUpload}
      />
      <Button
        title="Post"
        onPress={handlePost}
      />
    </View>
  );
}