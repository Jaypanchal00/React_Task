import React, { useState } from 'react';
import './Mul.css'

function Mul() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const addItem = () => {
        if (inputValue.trim() === "" || isNaN(inputValue)) {
            alert("Please enter a valid number");
            return;
        }
        setItems([...items, Number(inputValue)]);
        setInputValue("");
    };
    
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`mul-container ${darkMode ? "dark" : ""}`}>
            <h1>Multiply By 5</h1>

            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter a number"
            />
            <button onClick={addItem}>Add Item</button>

            <div className="output">
                {items.map((item, index) => (
                    <h2 key={index}>{item} × 5 = {item * 5}</h2>
                ))}
            </div>

            <button className="toggle-btn" onClick={toggleDarkMode}>
                {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    );
}

export default Mul;
