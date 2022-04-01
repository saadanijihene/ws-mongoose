import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigationbar from "./Components/Navigationbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Contactslist from "./Components/Contactslist";
import Addcontact from "./Components/Addcontact";
import Editcontact from "./Components/Editcontact";

function App() {
  return (
    <div className="App">
      <Navigationbar></Navigationbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contacts" element={<Contactslist></Contactslist>}></Route>
        <Route path="/addcontact" element={<Addcontact></Addcontact>}></Route>
        <Route path="/edit/:id" element={<Editcontact></Editcontact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
