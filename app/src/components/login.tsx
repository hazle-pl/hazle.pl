import React, { useState } from 'react';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Call the onLogin function passed from the App component
    onLogin(username, password);
  };

  return (
    <>
    <div className="blob bg-secondary-900 left"></div>
    <div className="login-form">
        <h3>Login</h3>
        <p>Hazle pre-production enviroment</p>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <div className="blob bg-secondary-500 right"></div>
    </div>
    <div className="blob bg-primary-900 center bottom"></div>
    </>
  );
};

export default Login;
