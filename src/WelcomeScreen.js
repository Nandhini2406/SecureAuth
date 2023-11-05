import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ToastAndroid,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';
import PatternLock from './PatternLock';

const Biometrics = new ReactNativeBiometrics();

const WelcomeScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    // Check if biometric authentication is available
    Biometrics.isSensorAvailable()
    .then(resultObject => {
      const {available, biometryType} = resultObject;
      if (available && biometryType === BiometryTypes.TouchID) {
        authenticateWithBiometrics();
        console.log('TouchID is supported');
      } else if (available && biometryType === BiometryTypes.FaceID) {
        authenticateWithBiometrics();
        console.log('FaceID is supported');
      } else {
        Alert.alert('Biometric authentication not available.');
        console.log('Biometrics not supported');
      }
    })
    .catch(error => {
      console.error('Error Caught', error);
    });
  }, []);
  
  const authenticateWithBiometrics = () => {
    Biometrics.simplePrompt({
      promptMessage: 'Fingerprint/Face Authentication',
    })
    .then(result => {
      const {success} = result;
      
      if (success) {
          navigation.navigate('Home');
          ToastAndroid.show('Biometric authentication successful', 1000);
          console.log('Authentication successful!');
        } else {
          console.log('Authentication failed or cancelled.');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to SecureAuth</Text>
      <Image source={require('./SecureAuth.jpg')} style={styles.img}></Image>
      <PatternLock/>
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
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  img: {
    width: '60%',
    height: '50%',
  },
});

export default WelcomeScreen;
