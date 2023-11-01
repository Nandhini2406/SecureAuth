import React from 'react';
import {View, Dimensions, Alert} from 'react-native';
import {GeneralPatternLock} from 'react-native-patternlock-authentication'; // Import Package
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
const PATTERN_CONTAINER_HEIGHT = height / 2; //you can change it as per your need
const PATTERN_CONTAINER_WIDTH = width; //you can change it as per your need
const PATTERN_DIMENSION = 3; //you can change it as per your need
const CORRECT_UNLOCK_PATTERN = '0123'; //Correct Pattern

const PatternLock = () => {
  const navigation = useNavigation();

  const onPatternMatch = () => {
    navigation.navigate('Home');
  };

  const onWrongPattern = () => {
    Alert.alert('Try Again');
  };

//   const onPatternMatchAfterDelay = () => {
//     // Do your Functionalities
//   };
//   const onWrongPatternAfterDelay = () => {
//     // Do your Functionalities
//   };
  return (
    <View>
      <GeneralPatternLock
        containerDimension={PATTERN_DIMENSION}
        containerWidth={PATTERN_CONTAINER_WIDTH}
        containerHeight={PATTERN_CONTAINER_HEIGHT}
        correctPattern={CORRECT_UNLOCK_PATTERN}
        dotsAndLineColor="Black"
        defaultDotRadius={10}
        snapDotRadius={15}
        snapDuration={100}
        lineStrokeWidth={5}
        wrongPatternColor="red"
        matchedPatternColor="Skyblue"
        onPatternMatch={onPatternMatch}
        onWrongPattern={onWrongPattern}
      />
    </View>
  );
};

export default PatternLock;
