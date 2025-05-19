import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Ensure Link is included here
import axios from 'axios';
import './AuthForm.css';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
            console.log('Login successful:', response.data);
            // Store user session (e.g., using local storage or context API)
            navigate('/catalogue');
        } catch (error) {
            console.error('Login failed:', error.response ? error.response.data.error : error.message);
            setError(error.response ? error.response.data.error : 'Login failed');
        }
    };

    return (
        <div className="auth-form">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="auth-button">Login</button>
            </form>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    );
}

export default LoginPage;