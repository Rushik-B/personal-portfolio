import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";

import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import BackgroundLayout from './components/BackgroundLayout';

function App() {
  return (
    <BackgroundLayout>
      <NavBar />
      <Banner />
      <Projects />
      <Contact />
      <Footer />
    </BackgroundLayout>
  );
}

export default App;
