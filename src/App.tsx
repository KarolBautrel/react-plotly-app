import { Navbar } from "./components/Navbar/Navbar";
import { MainWindow } from "./pages/MainWindow/MainWindow";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <>
        <div>
          <Navbar />
        </div>
        <div>
          <MainWindow />
        </div>
      </>
    </Provider>
  );
}

export default App;
