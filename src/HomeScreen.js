import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const HomeScreen = () => {
  const textMsg = `You have Successfully Completed 
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
    color:'#000',
    marginBottom: '20%',
  },
  msgView:{
    backgroundColor: 'skyblue',
    padding: 15,
    marginHorizontal: '5%',
    borderRadius: 10,
    alignSelf: 'center',
  },
  textMsg:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'#fff',
    alignSelf: 'center',
  },
});

export default HomeScreen;
