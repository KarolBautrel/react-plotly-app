import MainWindowContainer from "./containers/MainWindowContainer";
import NavbarContainer from "./containers/NavbarContainer";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <>
        <div>
          <NavbarContainer />
        </div>
        <div>
          <MainWindowContainer />
        </div>
      </>
    </Provider>
  );
}

export default App;
