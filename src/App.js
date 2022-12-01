import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "../src/pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import "./app.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/users" element={<UserList />} />
            <Route exact path="/user/:id" element={<User />} />
            <Route exact path="/user/new" element={<NewUser />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
