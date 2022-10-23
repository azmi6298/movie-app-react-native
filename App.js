import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider } from "@ui-kitten/components";
import TabNavigator from "./components/TabNavigator";
import { Provider } from "react-redux"
import { store } from "./redux/store"

export default function App() {
  return (
    <Provider store={ store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    </Provider>
  );
}
