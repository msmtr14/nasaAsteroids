import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './homescreen';
import SecondScreen from './SecondScreen';

export const AppContainerNav = createAppContainer(
  createStackNavigator(
    {
      Home: {screen: HomeScreen},
      Second: {screen: SecondScreen},
    },
    {
      initialRouteName: 'Home',
    },
  ),
);
