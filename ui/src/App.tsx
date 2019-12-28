import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">


      <div className="screens-header">
        
        <div className="title-row">
          <div className="title">
            Floor 10
          </div>
          <div className="title active">
            Floor 12
          </div>
          <div className="title">
            Floor 14
          </div>
        </div>

        <div className="status-holder">
            
          <div className="offline">
            Offline: 3
          </div>

          <div className="online">
            Online: 13
          </div>

        </div>

      </div>

      <div className="screens-container">
        
        <div className="screen-wrapper">
          <div className="screen">
            <img src="./assets/img/apple-bg.png" alt="Sample screen content" />
            <div className="screen-name">
              Screen Name
            </div>
            <div className="screen-status">
              Online
            </div>
          </div>
        </div>

        <div className="screen-wrapper">
          <div className="screen">
            <img src="./assets/img/apple-bg.png" alt="Sample screen content" />
            <div className="screen-name">
              Screen Name
            </div>
            <div className="screen-status">
              Online
            </div>
          </div>
        </div>



        <div className="screen-wrapper">
          <div className="screen offline">
            <img src="./assets/img/apple-bg.png" alt="Sample screen content" />
            <div className="screen-name">
              Screen Name
            </div>
            <div className="screen-status">
              Online
            </div>
          </div>
        </div>

        <div className="screen-wrapper">
          <div className="screen">
            <img src="./assets/img/apple-bg.png" alt="Sample screen content" />
            <div className="screen-name">
              Screen Name
            </div>
            <div className="screen-status">
              Online
            </div>
          </div>
        </div>

        <div className="screen-wrapper">
          <div className="screen">
            <img src="./assets/img/apple-bg.png" alt="Sample screen content" />
            <div className="screen-name">
              Screen Name
            </div>
            <div className="screen-status">
              Online
            </div>
          </div>
        </div>

        <div className="screen-wrapper">
          <div className="screen">
            <img src="./assets/img/apple-bg.png" alt="Sample screen content" />
            <div className="screen-name">
              Screen Name
            </div>
            <div className="screen-status">
              Online
            </div>
          </div>
        </div>

      </div>


    </div>
  );
}

export default App;
