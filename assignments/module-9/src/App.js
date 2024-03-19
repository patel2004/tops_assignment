import Task1 from "./Mod_13/Task1";
import Mod_9 from "./Mod_9/Mod_9";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mod_13" element={<> <Task1/> </>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
