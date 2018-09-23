import { createStackNavigator } from 'react-navigation';

import Home from '../views/Home';
import Login from '../views/Login';

export default MainRoute = createStackNavigator(
    {
        Home: Home,
        Login: Login
    },
    {
        initialRouteName: 'Login'
    }
);