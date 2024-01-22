import './App.css'
import Navbar from "./layout/Navbar/Navbar.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import NavbarVertical from "./components/NavbarVertical/NavbarVertical.jsx";

function App() {

  return (
    <>
      <Navbar />

        <NavbarVertical />
        <Dashboard />
    </>
  )
}

export default App
