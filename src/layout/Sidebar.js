import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

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
          <Text>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={this.navigateToScreen('Analytics')}>
          <Text>Analytics</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.drawerItem}
          onPress={this.navigateToScreen('Settings')}>
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
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
