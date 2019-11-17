import * as React from "react";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { TodoList } from "./components/TodoList";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <TodoList />
      </PersistGate>
    </Provider>
  );
};

export default App;
