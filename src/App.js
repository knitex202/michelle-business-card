
import './App.css';
import bidenHarris from "../src/Assets/bidenHarrisLogo.png"
import qrcode from "../src/Assets/icons8-qr-code-96.png"
import michelle from "../src/Assets/michelle-profile.png"
import Landing from './Components/Landing/Landing';
import { useState } from 'react';
import QRcode from './Components/QRcode/QRcode';


function App() {
  const [selected,setSelected] = useState(false)
  const handleClick = () => {
    setSelected(!selected)
  }
  return (
    <div className="App">  
       <div className="card-container">
        <div className="upper-container">
          <div className="logo-container">
          <img src={bidenHarris} height={40} alt="" />
          <hr/>
          <p>For President</p>
          </div>
          <img onClick={handleClick} className="qr-button" src={qrcode} height={40} alt="" />
        </div>
        <div className="content-container">
          <div className="profile-container">
            <div className="profile-image-container">
            <img src={michelle}  alt="" />
            </div>
          </div>
          <div className="profile-info-container">
          {selected === true ? <QRcode/> :<Landing/>}
          </div>
        </div>
       </div>
    </div>
  );
}

export default App;
