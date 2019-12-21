import React from 'react';
import {StyleSheet} from 'react-native';
import {Header, Left, Button, Icon, Body, Right, Title} from 'native-base';

export default props => {
  return (
    <Header transparent={props.transparent ? true : false}>
      <Left style={styles.flex}>
        <Button onPress={props.navigation.openDrawer} transparent>
          <Icon name="menu" style={styles.icon} />
        </Button>
      </Left>
      {props.title ? (
        <Body style={styles.flex}>
          <Title style={styles.title}>{props.title}</Title>
        </Body>
      ) : (
        <Body />
      )}
      <Right />
    </Header>
  );
};

const styles = StyleSheet.create({
  flex: {flex: 1},
  title: {alignSelf: 'center', fontFamily: 'Europa-Bold', fontSize: 24},
  icon: {color: '#fff', fontSize: 30},
});
