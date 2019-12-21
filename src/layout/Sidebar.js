import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import MyText from '../ui/MyText';

class Sidebar extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.closeDrawer(); // Handle same route nav prop
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={this.navigateToScreen('Dashboard')}>
          <Icon type="Feather" name="home" style={styles.drawerIcon} />
          <MyText>Dashboard</MyText>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={this.navigateToScreen('Analytics')}>
          <Icon type="Entypo" name="line-graph" style={styles.drawerIcon} />
          <MyText>Analytics</MyText>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={this.navigateToScreen('Settings')}>
          <Icon type="Feather" name="settings" style={styles.drawerIcon} />
          <MyText>Settings</MyText>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
  },
  drawerItem: {
    paddingLeft: 25,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerIcon: {fontSize: 20, marginRight: 10},
});

export default Sidebar;
