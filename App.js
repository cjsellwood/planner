import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import Main from "./src/components/Main";
import { BackButton, NativeRouter } from "react-router-native";

import global from "./src/store/reducers/global";
import stopwatch from "./src/store/reducers/stopwatch";
import timer from "./src/store/reducers/timer";
import notes from "./src/store/reducers/notes";
import reminders from "./src/store/reducers/reminders";

const rootReducer = combineReducers({
  global: global,
  stopwatch: stopwatch,
  timer: timer,
  notes: notes,
  reminders: reminders,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const App = () => {
  return (
    <Provider store={store}>
      <NativeRouter>
        <BackButton />
        <Main />
      </NativeRouter>
    </Provider>
  );
};

export default App;
