 App.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [displayText, setDisplayText] = useState('Abdaullah Ali Alnabhan 136517!');

  const updateText = () => {
    setDisplayText('Button Clicked!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{displayText}</Text>
      <Button title="Show information" onPress={updateText} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
}); 
<ul style={
  {
    backgroundColor: 'black',
    color: 'white'
  }
}></ul>

// export default app;
