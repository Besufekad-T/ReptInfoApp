import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { auth, db } from '../firebase'; // Import Firebase authentication and Firestore instance
import { doc, setDoc, collection, query, orderBy, getDocs } from "firebase/firestore";

const SocialMedia = () => {
  const [posts, setPosts] = useState([]); // State to store posts
  const [postText, setPostText] = useState(''); // State for input text
  const [user, setUser] = useState(null); // State for current user

  useEffect(() => {
    // Check if a user is authenticated
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe; // Cleanup function
  }, []);

  useEffect(() => {
    // Fetch posts from Firestore
    const fetchPosts = async () => {
      try {
        const postsSnapshot = await getDocs(query(collection(db, 'posts'), orderBy('timestamp', 'desc')));
        const postData = postsSnapshot.docs.map(doc => ({ id: doc.id, data: doc.data() }));
        setPosts(postData);
      } catch (error) {
        console.error('Error fetching posts: ', error);
      }
    };
    fetchPosts();
  }, []);

  const handlePost = async () => {
    // Add a new post to Firestore
    if (postText.trim() !== '') {
      const newPost = {
        text: postText,
        timestamp: new Date(),
        userId: user.uid,
        username: user.displayName,
        likes: [],
        comments: []
      };

      try {
        await setDoc(doc(db, 'posts', 'GOxOmhE97Hdma6SFjAEh'), newPost);
        setPostText('');
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="What's on your mind?"
          value={postText}
          onChangeText={text => setPostText(text)}
        />
        <Button
          title="Post"
          onPress={handlePost}
        />
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Text style={styles.username}>{item.data.username}</Text>
            <Text>{item.data.text}</Text>
            <View style={styles.actions}>
              <Button title="Like" onPress={() => console.log('Like')} />
              <Button title="Comment" onPress={() => console.log('Comment')} />
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  inputContainer: {
    alignItems: 'center',
    paddingVertical: 20, // Add padding to the top
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  postContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default SocialMedia;
