import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateBooks from "./CreateBooks";
import Dashboard from "./Dashboard";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserProvider } from "./context";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/createbooks" element={<CreateBooks />} />
          </Routes>
        </div>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
