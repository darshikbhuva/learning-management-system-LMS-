import "./App.css";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";

function App() {
  return (
    <div className=" flex flex-col gap-40">
      <Navbar />
      <Login />
    </div>
  );
}

export default App;
