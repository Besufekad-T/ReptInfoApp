import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

// Added the Google Vision API key with settings from Google Cloud
// I assumed that the settings are correct and the API key is valid
const VisionAPIKey = 'AIzaSyDr8Q00Qu4PIlNXddHn9P8r13eRiylcsZc';

const ReptileRecognition = () => {
  const [imageUri, setImageUri] = useState(null);

  const takePicture = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
      analyzeImage(result.uri);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImageUri(result.uri);
      analyzeImage(result.uri);
    }
  };

  const analyzeImage = async (uri) => {
    try {
      let formData = new FormData();
      formData.append('file', {
        uri,
        type: 'image/jpeg',
        name: 'photo.jpg',
      });
      // Hello example

      let response = await axios.post(
        `https://vision.googleapis.com/v1/images:annotate?key=${VisionAPIKey}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // Process response to extract reptile name
      console.log(response.data);
    } catch (error) {
      console.error('Error analyzing image:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Take Picture" onPress={takePicture} />
        <Button title="Pick Image" onPress={pickImage} />
      </View>
      {imageUri && <Image source={{ uri: imageUri }} style={{ flex: 1 }} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default ReptileRecognition;