import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, H2} from 'native-base';
import Header from '../layout/Header';

const Analytics = props => {
  return (
    <Container style={styles.outerContainer}>
      <Header {...props} title="Analytics" transparent />
      <Content>
        <H2>Analytics Body</H2>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#4C4CFF',
  },
});

export default Analytics;
