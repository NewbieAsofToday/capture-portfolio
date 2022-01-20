import AboutSection from "./components/AboutSection";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from "../src/pages/ContactUs";
import OurWork from "../src/pages/OurWork";
import { Switch, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path='/' element={<AboutUs />}></Route>
        <Route path='/work' element={<OurWork />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
      </Routes>
    </div>
  );
}

export default App;
