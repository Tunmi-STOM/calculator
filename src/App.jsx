import { useState } from "react";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && <Home goToCalc={() => setPage("calc")} />}
      {page === "calc" && <Calculator goHome={() => setPage("home")} />}
    </>
  );
}

export default App;
