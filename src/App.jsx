import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Filter />
      </Provider>
    </div>
  );
}

export default App;
