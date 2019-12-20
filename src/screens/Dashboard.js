import React from 'react';
import Header from '../layout/Header';
import {StyleSheet} from 'react-native';
import {Container, Content, H1} from 'native-base';

const Dashboard = props => {
  return (
    <Container style={styles.outerContainer}>
      <Header {...props} transparent />
      <Content>
        <H1>Dashboard</H1>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#4C4CFF',
  },
});

export default Dashboard;
