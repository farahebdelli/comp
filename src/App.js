import React from "react";
import ProfilePhoto from "./Profile/ProfilePhoto";
import FullName from "./Profile/FullName";
import Address from "./Profile/Address";
import './styles.css';
function App() {
  return (
    <div className="App.css">
      <h1>Mon Profil</h1>
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
}

export default App;
