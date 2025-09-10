import React, { useState } from "react";

type Props = {
  onLogin: (username: string, password: string) => void;
  onRegister: (username: string, password: string) => void;
};

const MainMenu: React.FC<Props> = ({ onLogin, onRegister }) => {
  const [showRegister, setShowRegister] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [registerData, setRegisterData] = useState({ username: "", password: "" });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(loginData.username, loginData.password);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister(registerData.username, registerData.password);
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: 20, border: "1px solid #ccc", borderRadius: 10 }}>
      <h2>Witamy w Stylist!</h2>
      {!showRegister ? (
        <>
          <form onSubmit={handleLogin}>
            <div>
              <label>Login:</label>
              <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleLoginChange}
                required
                autoComplete="username"
              />
            </div>
            <div>
              <label>Hasło:</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                required
                autoComplete="current-password"
              />
            </div>
            <button type="submit">Zaloguj</button>
          </form>
          <p>
            Nie masz konta?{" "}
            <button
              onClick={() => setShowRegister(true)}
              style={{
                background: "none",
                border: "none",
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
                padding: 0,
              }}
              type="button"
            >
              Zarejestruj się
            </button>
          </p>
        </>
      ) : (
        <>
          <form onSubmit={handleRegister}>
            <div>
              <label>Login:</label>
              <input
                type="text"
                name="username"
                value={registerData.username}
                onChange={handleRegisterChange}
                required
                autoComplete="username"
              />
            </div>
            <div>
              <label>Hasło:</label>
              <input
                type="password"
                name="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                required
                autoComplete="new-password"
              />
            </div>
            <button type="submit">Zarejestruj</button>
          </form>
          <p>
            Masz już konto?{" "}
            <button
              onClick={() => setShowRegister(false)}
              style={{
                background: "none",
                border: "none",
                color: "blue",
                textDecoration: "underline",
                cursor: "pointer",
                padding: 0,
              }}
              type="button"
            >
              Zaloguj się
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default MainMenu;