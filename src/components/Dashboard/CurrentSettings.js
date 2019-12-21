import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Icon} from 'native-base';
import MyText from '../../ui/MyText';

const CurrentSettings = props => {
  return (
    <View style={styles.viewContainer}>
      <Button style={styles.button} iconLeft bordered light>
        <Icon type="Ionicons" name="ios-musical-notes" />
        <MyText style={styles.buttonText}>Music</MyText>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    position: 'absolute',
    zIndex: 1,
    bottom: 75,
    width: '100%',
  },
  button: {
    width: 120,
    alignSelf: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
  },
});

export default CurrentSettings;
