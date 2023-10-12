import { Navbar } from "./components/Navbar/Navbar";
import { MainWindow } from "./pages/MainWindow/MainWindow";
import { ChartContext } from "./context/ChartDisplayContext";
import { useState } from "react";
function App() {
  const [chartDisplay, setChartDisplay] = useState<string>("pie");
  return (
    <>
      <ChartContext.Provider value={{ chartDisplay, setChartDisplay }}>
        <div>
          <Navbar />
        </div>
        <div>
          <MainWindow />
        </div>
      </ChartContext.Provider>
    </>
  );
}

export default App;
