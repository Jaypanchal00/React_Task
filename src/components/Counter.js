import React, { Component } from 'react';
import './Counter.css'
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            darkMode: false
        };
    }

    toggleDarkMode = () => {  
        this.setState((prevState) => ({
            darkMode: !prevState.darkMode
        }));
    };

    render() {
        const { count, darkMode } = this.state;
        return (
            <div className={darkMode ? "container dark" : "container"}>
                <h1>Counter App</h1>
                <h2>{count}</h2>
                <div className="button-group">
                    <button onClick={() => this.setState({ count: count + 1 })}>Increment</button>
                    <button onClick={() => this.setState({ count: count - 1 })}>Decrement</button>
                </div>
                <button className="toggle-btn" onClick={this.toggleDarkMode}>
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </div>
        );
    }
}

export default Counter;