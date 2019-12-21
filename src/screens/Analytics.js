import React from 'react';
import {StyleSheet} from 'react-native';
import {Container, Content, H2} from 'native-base';
import Header from '../layout/Header';
import MyText from '../ui/MyText';

const Analytics = props => {
  return (
    <Container style={styles.outerContainer}>
      <Header {...props} title="Analytics" transparent />
      <Content>
        <MyText>Analytics Stuff</MyText>
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
