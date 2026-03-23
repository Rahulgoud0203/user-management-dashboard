import { Link } from "react-router";
import "./index.css";
const UserCard = ({ user }) => {
  return (
    <Link to={`/user/${user.id}`}>
      <div className="card">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>{user.address.city}</p>
      </div>
    </Link>
  );
};

export default UserCard;
