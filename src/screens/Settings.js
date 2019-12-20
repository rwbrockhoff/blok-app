import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, H2} from 'native-base';
import Header from '../layout/Header';

const Settings = props => {
  return (
    <Container style={styles.outerContainer}>
      <Header {...props} title="Settings" transparent />
      <Content>
        <H2>Settings Body</H2>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#4C4CFF',
  },
});

export default Settings;
