import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import DragAndDrop from "./views/DragAndDrop";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/001"} element={<DragAndDrop />} />
    </Routes>
  );
}

export default App;
