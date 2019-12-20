import React from 'react';
import {Header, Left, Button, Icon, Body, Right, Title} from 'native-base';
// import Icon from 'react-native-vector-icons/Ionicons';

const flexStyle = {flex: 1};
const titleStyle = {
  alignSelf: 'center',
};
const iconStyle = {
  color: '#fff',
  fontSize: 30,
};

export default props => {
  return (
    <Header transparent={props.transparent ? true : false}>
      <Left style={flexStyle}>
        <Button onPress={props.navigation.openDrawer} transparent>
          <Icon name="menu" style={iconStyle} />
        </Button>
      </Left>
      {props.title ? (
        <Body style={flexStyle}>
          <Title style={titleStyle}>{props.title}</Title>
        </Body>
      ) : (
        <Body />
      )}
      <Right />
    </Header>
  );
};
