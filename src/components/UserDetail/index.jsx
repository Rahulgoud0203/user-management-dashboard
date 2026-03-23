import { useParams, useNavigate } from "react-router";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import "./index.css";
const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users, loading } = useContext(UserContext);
  const user = users.find((u) => u.id === Number(id));
  if (loading) {
    return <h1 className="loader">Loading .....</h1>;
  }

  if (!user) {
    return <h2 className="no-users">User not found</h2>;
  }

  return (
    <div className="dtl-cnt">
      <button className="back-btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      <div className="dtl-card">
        <h2>{user.name}</h2>
        <p>
          Email:{" "}
          <a href={`mailto:${user.email}`} className="user-link">
            {user.email}
          </a>
        </p>
        <p>Phone: {user.phone}</p>
        <p>Company: {user.company.name}</p>
        <p>
          Website:{" "}
          <a
            className="user-link"
            href={`https://${user.website}`}
            target="_blank"
          >
            {user.website}
          </a>
        </p>
      </div>
    </div>
  );
};
export default UserDetail;
