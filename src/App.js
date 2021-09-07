import "./App.css";
import Address from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <div className="image">
            <ProfilePhoto />
          </div>
          <div className="text">
            <FullName />
            <Address />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
