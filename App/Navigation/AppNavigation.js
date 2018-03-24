import { StackNavigator } from 'react-navigation'
import MainMenuScreen from '../Containers/MainMenuScreen'
import PizzaLocationListScreen from '../Containers/PizzaLocationListScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  MainMenuScreen: { screen: MainMenuScreen },
  PizzaLocationListScreen: { screen: PizzaLocationListScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
