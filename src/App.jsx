import { Route, Routes } from "react-router-dom";
import GlobalStyles from "components/shared/global/globalStyles";
import Home from "components/home";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
