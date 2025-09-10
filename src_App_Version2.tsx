import React from "react";
import MainMenu from "./components/MainMenu";

function handleLogin(username: string, password: string) {
  alert(`Zalogowano jako: ${username}`);
}

function handleRegister(username: string, password: string) {
  alert(`Zarejestrowano użytkownika: ${username}`);
}

function App() {
  return (
    <div>
      <MainMenu onLogin={handleLogin} onRegister={handleRegister} />
    </div>
  );
}

export default App;