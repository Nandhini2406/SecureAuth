import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  const textMsg = `You Successfully Completed 
  Biometrics Authentication`;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to SecureAuth</Text>
      <View style={styles.msgView}>
        <Text style={styles.textMsg}>{textMsg}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'Skyblue',
    marginBottom: 40,
  },
  msgView:{
    backgroundColor: 'skyblue',
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  textMsg:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'black',
  },
});

export default HomeScreen;
