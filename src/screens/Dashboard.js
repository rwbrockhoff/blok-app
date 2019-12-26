import React, {Component} from 'react';
import Header from '../layout/Header';
import {StyleSheet} from 'react-native';
import {Container, Content} from 'native-base';
import CurrentSettings from '../components/Dashboard/CurrentSettings';
import MyText from '../ui/MyText';
import BackgroundTimer from 'react-native-background-timer';

const initialState = {timer: 1500, playing: false};

class Dashboard extends Component {
  state = {...initialState};

  componentWillUnmount() {
    BackgroundTimer.stopBackgroundTimer();
    this.setState({...initialState});
  }

  decrementTimer = async () => {
    const {timer, playing} = this.state;
    if (!playing) return;
    // Return if paused
    else if (timer > 0 && playing) {
      this.setState(state => {
        return {timer: state.timer - 1};
      });
    } else {
      // Handle timer reaching 0
    }
  };

  playPauseToggle = () => {
    this.setState(state => {
      return {playing: !state.playing};
    }, this.stopTimer);
  };

  stopTimer = () => {
    if (!this.state.playing) {
      BackgroundTimer.stopBackgroundTimer();
    } else {
      BackgroundTimer.runBackgroundTimer(this.decrementTimer, 1000);
    }
  };

  render() {
    const {timer} = this.state;
    const minutes = Math.floor(timer / 60);
    const seconds = timer - minutes * 60;
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    return (
      <Container style={styles.outerContainer}>
        <Header {...this.props} transparent />
        <Content contentContainerStyle={styles.content}>
          <MyText style={styles.timerText} bold onPress={this.playPauseToggle}>
            {minutes}:{displaySeconds}
          </MyText>
          <CurrentSettings />
        </Content>
      </Container>
    );
  }
}

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
