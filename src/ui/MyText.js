import React from 'react';
import {Text} from 'native-base';
import {StyleSheet} from 'react-native';

export default props => {
  const {style, bold} = props;
  const boldStyle = bold ? {fontFamily: 'Europa-Bold'} : {};
  return (
    <Text {...props} style={{...style, ...styles.text, ...boldStyle}}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Europa-Regular',
  },
});
