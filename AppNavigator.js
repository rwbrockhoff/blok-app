import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import Sidebar from './src/layout/Sidebar';
import Dashboard from './src/screens/Dashboard';
import Analytics from './src/screens/Analytics';
import Settings from './src/screens/Settings';

const MyDrawer = createDrawerNavigator(
  {
    Dashboard,
    Analytics,
    Settings,
  },
  {
    initialRouteName: 'Dashboard',
    contentComponent: Sidebar,
    drawerWidth: 250,
  },
);

export default createAppContainer(MyDrawer);
