import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "remote-redux-devtools";

import global from "./src/store/reducers/global";

const rootReducer = combineReducers({
  global: global,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>Planner</Text>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
