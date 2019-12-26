import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from '../screens/Main';
import BottomNav from '../screens/BottomNav';
import FriendshipCal from '../screens/FriendshipCal';
import Register from '../screens/Register';
import GetStarted from '../screens/GetStarted';
const AppNavigator = createStackNavigator(
  {
    Main: Main,
    BottomNav: BottomNav,
    FriendshipCal: FriendshipCal,
    Register: Register,
    GetStarted: GetStarted,
  },
  {
    headerMode: 'none',
  },
);

const App1 = createAppContainer(AppNavigator);
export default App1;
