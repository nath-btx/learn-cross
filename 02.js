import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      {/* <Button 
      title = "Hello there"
      onPress = {() => { alert("General Kenobi")}}
      > </Button> */}
      <TouchableOpacity
      style = {styles.button}
      onPress = {() => { alert("General Kenobi")}}>
        <Text> Hello there </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});
