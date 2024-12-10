import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from '../../component/header';

const MainScreen = () => {
  const [message, setMessage] = useState('Welcome to MainScreen!');
  const [count, setCount] = useState(0);

  // ComponentDidMount & ComponentWillUnmount equivalent
  useEffect(() => {
    console.log('MainScreen Mounted');
    return () => {
      console.log('MainScreen Unmounted');
    };
  }, []);

  // ComponentDidUpdate equivalent
  useEffect(() => {
    console.log(`Count updated to ${count}`);
  }, [count]);

  return (
    <View style={styles.container}>
      <Header title="My Awesome App" />
      <Text style={styles.text}>{message}</Text>
      <Text style={styles.text}>Count: {count}</Text>
      <Button title="Increase Count" onPress={() => setCount(count + 1)} />
      <Button
        title="Reset Count"
        onPress={() => setCount(0)}
        color="#FF6347"
        style={{ marginTop: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 18,
    marginVertical: 10,
  },
});

export default MainScreen;
