import { useState, useContext } from "react";
import { UserContext } from "./UserCon";
import "./Login.css";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.email === form.email &&
      savedUser.password === form.password
    ) {
      localStorage.setItem("loggedInUser", JSON.stringify(savedUser));
      setUser(savedUser);
      alert("Login Successful!");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="form-container">   {/* 👈 CSS ke liye */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        /><br/>
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        /><br/>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
