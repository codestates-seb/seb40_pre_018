import { Route, Routes } from "react-router-dom";
import Common from "./components/Common";

function App() {
  return (
    <>    
      <Routes>
        <Route path="/" element={<Common />}>

        </Route>
      </Routes>
    </>
  );
}

export default App;
