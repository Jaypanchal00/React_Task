import { useContext } from "react";
import { UserContext } from "./UserCon";
import "./Home.css";   

export default function Home() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Welcome {user ? user.name : "Guest"}!</h1>
      {user ? <p>Your email: {user.email}</p> : <p>Please Login</p>}
    </div>
  );
}
