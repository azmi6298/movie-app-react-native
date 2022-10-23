import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";
import RecommendationScreen from "../pages/RecommendationScreen";
import NowPlayingScreen from "../pages/NowPlayingScreen";

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="Recommendation" />
    <BottomNavigationTab title="Now Playing" />
  </BottomNavigation>
);

export default function TabNavigator() {
  return (
    <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <Screen name="Recommendation" component={RecommendationScreen} />
      <Screen name="Now Playing" component={NowPlayingScreen} />
    </Navigator>
  );
}
