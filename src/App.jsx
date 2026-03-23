import { useState, useEffect } from "react";
import UserContext from "./context/UserContext.jsx";
import Home from "./components/Home";
import UserDetail from "./components/UserDetail";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router";
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);
  return (
    <UserContext
      value={{
        users,
        loading,
        error,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
    </UserContext>
  );
}

export default App;
