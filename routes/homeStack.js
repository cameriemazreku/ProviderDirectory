import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../Screens/Home';
import Select from '../Screens/Select';
//object - screen property - for this particular route of screen what components or screen do u want to show
const screens ={
    Home: {     
        screen: Home
    },
    Select: {
        screen: Select
    }
}
const HomeStack = createStackNavigator({screens}) //what different screens we want to register for this stack navigator

export default createAppContainer(HomeStack);