// import React from 'react';
// import {View, Dimensions, Alert} from 'react-native';
// import {GeneralPatternLock} from 'react-native-patternlock-authentication'; // Import Package
// import {useNavigation} from '@react-navigation/native';

// const {width, height} = Dimensions.get('window');
// const PATTERN_CONTAINER_HEIGHT = height / 2; //you can change it as per your need
// const PATTERN_CONTAINER_WIDTH = width; //you can change it as per your need
// const PATTERN_DIMENSION = 3; //you can change it as per your need
// const CORRECT_UNLOCK_PATTERN = '0123'; //Correct Pattern

// const PatternLock = () => {
//   const navigation = useNavigation();

//   const onPatternMatch = () => {
//     navigation.navigate('Home');
//   };

//   const onWrongPattern = () => {
//     Alert.alert('Try Again');
//   };

//   return (
//     <GeneralPatternLock
//       containerDimension={PATTERN_DIMENSION}
//       containerWidth={PATTERN_CONTAINER_WIDTH}
//       containerHeight={PATTERN_CONTAINER_HEIGHT}
//       correctPattern={CORRECT_UNLOCK_PATTERN}
//       dotsAndLineColor="Black"
//       defaultDotRadius={10}
//       snapDotRadius={15}
//       snapDuration={100}
//       lineStrokeWidth={5}
//       wrongPatternColor="red"
//       matchedPatternColor="Skyblue"
//       onPatternMatch={onPatternMatch}
//       onWrongPattern={onWrongPattern}
//     />
//   );
// };

// export default PatternLock;

import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const PatternLock = ({ onSuccess, onFailure }) => {
  const [pattern, setPattern] = useState([]);

  const handlePress = (index) => {
    if (pattern.length < 4) { // Limiting pattern length to 4 dots
      const newPattern = [...pattern, index];
      setPattern(newPattern);

      if (newPattern.length === 4) {
        // Assuming the correct pattern is [0, 1, 2, 3]
        if (JSON.stringify(newPattern) === JSON.stringify([0, 1, 2, 3])) {
          onSuccess(); // Pattern is correct
        } else {
          onFailure(); // Pattern is incorrect
        }
      }
    }
  };

  const resetPattern = () => {
    setPattern([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {[...Array(9)].map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.dot,
              pattern.includes(index) && styles.selectedDot]}
            onPress={() => handlePress(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: '10%',
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: 'black',
    margin: 40,
  },
  selectedDot: {
    backgroundColor: 'white',
    color: 'white', // Change color for selected dots
  },
  resetButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});

export default PatternLock;


// import React, {useState} from 'react';
// import {StyleSheet, View, Button, TouchableOpacity, } from 'react-native';
// import Svg, { Path } from 'react-native-svg';

// const PatternLock = () => {
//   const [pattern, setPattern] = useState([]); // Store the pattern that the user has drawn.
//   const [isUnlocked, setIsUnlocked] = useState(false); // Whether or not the pattern lock is unlocked.
//   const [line, setLine] = useState([]); // Store the coordinates of the line
  
//   const handleDotTap = dot => {
//     setPattern([...pattern, dot]);
//     setLine([...line, { x: dot.x, y: dot.y }]);
//   };

//   const handlePatternComplete = () => {
//     // Verify the pattern and unlock the app if it is correct.
//     if (pattern) {
//       setIsUnlocked(true);
//     } else {
//       // Display an error message.
//     }
//   };
//   const renderLine = () => {
//     if (line.length > 1) {
//       const path = [];
//       for (let i = 0; i < line.length - 1; i++) {
//         path.push(
//           `M${line[i].x},${line[i].y} L${line[i + 1].x},${line[i + 1].y}`,
//         );
//       }

//       return (
//         <Svg style={styles.line}>
//           <Path stroke="black" strokeWidth={2} d={path.join(' ')} />
//         </Svg>
//       );
//     }

//     return null;
//   };

//   return (
//     <>
//       <View style={styles.dotsContainer}>
//         {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(dot => (
//           <TouchableOpacity
//             key={dot}
//             style={styles.dot}
//             onPress={() => handleDotTap({ x: dot % 3, y: Math.floor(dot / 3) })}
//           />
//         ))}
//       </View>
//       {renderLine()}
//     </>
//     // {/* <Button
//     //   title="Unlock"
//     //   onPress={handlePatternComplete}
//     //   disabled={!isUnlocked}
//     // /> */}
//   );
// };

// const styles = StyleSheet.create({
//   dotsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginHorizontal: '8%',
//   },
//   dot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: 'black',
//     margin: 50,
//   },
//   line: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     color: 'black',
//   },
// });

// export default PatternLock;
