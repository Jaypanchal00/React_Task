import { useState } from "react";
import "./SignUp.css";   

export default function SignUp({ setShowLogin }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    
    localStorage.setItem("user", JSON.stringify(form));

    alert("User Registered! Please login.");


    setShowLogin(true);
  };

  return (
    <div className="form-container">   
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        /><br/>
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
        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account?{" "}
        <button className="switch-btn" onClick={() => setShowLogin(true)}>Login</button>
      </p>
    </div>
  );
}
