import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

import Pagenotfound from "./pages/Pagenotfound";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Banking from "./pages/Banking";
import Loan from "./pages/Loan";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="Loan" element={<Loan />} />
          <Route path="Banking" element={<Banking />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
