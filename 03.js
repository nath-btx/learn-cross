import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <div>
      <MyButton></MyButton>
      <MyButton info="monInfo"></MyButton>
    </div>
  );
}

function MyButton(props) {
  const info = props.info
  if (info){
    return (
      <TouchableOpacity
        style = {styles.button}
        onPress = {() => { alert("Welcome")}}>
        <Text> Hello ! </Text>
      </TouchableOpacity>
    )
  }
  // * default
  //
  else {
    return (
      <TouchableOpacity
        style = {styles.button}
        onPress = {() => { alert("General Kenobi")}}>
        <Text> Hello there </Text>
      </TouchableOpacity>
    )
  }
  
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



