import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert, ToastAndroid} from 'react-native';
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
        if (
          available &&
          biometryType === BiometryTypes.TouchID &&
          biometryType === BiometryTypes.FaceID
        ) {
          authenticateWithBiometrics();
          console.log('TouchID & FaceID is supported');
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
          // Biometric authentication successful
          ToastAndroid.show('Biometric authentication successful', 1000)
          console.log('Authentication successful!');
        } else {
          // Biometric authentication failed or user cancelled
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
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;


// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Button, Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
// import PatternLock from 'react-pattern-lock';

// const Biometrics = new ReactNativeBiometrics();

// const WelcomeScreen = () => {
//   const navigation = useNavigation();
//   const [authenticated, setAuthenticated] = useState(false);

//   useEffect(() => {
//     // Check if biometric authentication is available
//     Biometrics.isSensorAvailable()
//       .then(resultObject => {
//         const { available, biometryType } = resultObject;
//         if (
//           available &&
//           biometryType === BiometryTypes.TouchID &&
//           biometryType === BiometryTypes.FaceID
//         ) {
//           authenticateWithBiometrics();
//           console.log('TouchID & FaceID is supported');
//         } else {
//           // Check if pattern lock authentication is available
//           PatternLock.isAvailable()
//             .then(isPatternLockAvailable => {
//               if (isPatternLockAvailable) {
//                 // Pattern lock authentication is available
//                 authenticateWithPatternLock();
//                 console.log('Pattern lock authentication is supported');
//               } else {
//                 // Authentication is not available
//                 Alert.alert('Authentication is not available.');
//                 console.log('Authentication is not supported');
//               }
//             })
//             .catch(error => {
//               console.error('Error Caught', error);
//             });
//         }
//       })
//       .catch(error => {
//         console.error('Error Caught', error);
//       });
//   }, []);

//   const authenticateWithBiometrics = async () => {
//     // Check if biometric authentication is available
//     const isBiometricsAvailable = await Biometrics.isSensorAvailable();

//     if (isBiometricsAvailable) {
//       // Biometric authentication is available
//       Biometrics.simplePrompt({
//         promptMessage: 'Authenticate with your fingerprint/face',
//       })
//         .then(result => {
//           const { success } = result;

//           if (success) {
//             // Biometric authentication successful
//             setAuthenticated(true);
//           } else {
//             // Biometric authentication failed or user cancelled
//             authenticateWithPatternLock();
//           }
//         })
//         .catch(error => {
//           console.error(error);
//         });
//     } else {
//       // Authentication is not available
//       Alert.alert('Authentication is not available.');
//     }
//   };

//   const authenticateWithPatternLock = async () => {
//     try {
//       const pattern = await PatternLock.authenticate();

//       // If the pattern matches, authenticate the user
//       setAuthenticated(true);
//     } catch (error) {
//       // Handle error
//     }
//   };

//   if (authenticated) {
//     // User is authenticated
//     return <Text>Welcome to SecureAuth!</Text>;
//   } else {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.text}>Welcome to SecureAuth</Text>
//       </View>
//     );
//   }
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   text: {
//     marginBottom: 20,
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
// });

// export default WelcomeScreen;
