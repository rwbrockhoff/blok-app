import React from 'react';
import Header from '../layout/Header';
import {StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import CurrentSettings from '../components/Dashboard/CurrentSettings';
import MyText from '../ui/MyText';

const Dashboard = props => {
  return (
    <Container style={styles.outerContainer}>
      <Header {...props} transparent />
      <Content contentContainerStyle={styles.content}>
        <MyText style={styles.timerText} bold>
          25:00
        </MyText>
        <CurrentSettings />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: '#4C4CFF',
  },
  content: {
    justifyContent: 'center',
    flex: 1,
  },
  timerText: {
    fontSize: 60,
    color: '#fff',
    alignSelf: 'center',
    marginBottom: 100,
  },
});

export default Dashboard;
