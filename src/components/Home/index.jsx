import "./index.css";
import UserContext from "../../context/userContext";
import UserCard from "../UserCard";
import { useState, useContext, useMemo } from "react";
const Home = () => {
  const { users, loading, error } = useContext(UserContext);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const filteredUsers = useMemo(() => {
    return [...users]
      .filter((itm) => itm.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) =>
        sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name),
      );
  }, [users, search, sortOrder]);
  if (loading) return <h2 className="loader">Loading...</h2>;
  if (error) return <h2 className="error_msg">{error}</h2>;

  return (
    <div className="dash-cnt">
      <h1>User Dashboard</h1>

      <div className="srch-sort-cnt">
        <input
          className="search-input"
          type="text"
          placeholder="Search user..."
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="sort-dropdown"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">A→Z</option>
          <option value="desc">Z→A</option>
        </select>
      </div>

      {filteredUsers.length === 0 ? (
        <p className="no-users">No users found</p>
      ) : (
        <div className="user-grid">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Home;
