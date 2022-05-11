import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listing from 'Pages/Listing/Listing';
import Form from 'Pages/Form';
import NavBar from "components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/Form">
          <Route path=":ganmeId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
