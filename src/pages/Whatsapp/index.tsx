import React from 'react';

import './styles.css';
import SupermanIMG from '../../assets/superman.jpg';
import BatmanIMG from '../../assets/batman.png';
import MulherMatavilhaIMG from '../../assets/mulher_maravilha.png';
import AlienIMG from '../../assets/alien.png';

const Whatsapp = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 px-0" id="panel-left">
            <header className="d-flex">
              <img src={SupermanIMG} alt="Avatar"/>
            </header>

            <div id="search"></div>

            <div className="list-group">
              <a href="Link" className="list-group-item list-group-item-action d-flex aling-items-center">
                <img src={BatmanIMG} alt="Avatar"/>
                <div className="d-flex flex-column flex-fill">
                  <h6>Batman</h6>
                  <small>Faça seus medos terem medo...</small>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <span className="timeago">21:05</span>
                  <span className="badge badge-success badge-pill">1</span>
                </div>
              </a>

              <a href="Link" className="list-group-item list-group-item-action d-flex aling-items-center">
                <img src={MulherMatavilhaIMG} alt="Avatar"/>
                <div className="d-flex flex-column flex-fill">
                  <h6>Mulher Maravilha</h6>
                  <small>Eu vou lutar, por todos aquel...</small>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <span className="timeago">Ontem</span>
                  <span className="badge badge-success badge-pill"></span>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-8 px-0 d-flex flex-column">
            <header className="d-flex align-items-center">
              <img src={MulherMatavilhaIMG} alt="Avatar"/>
              <div className="d-flex flex-column flex-fill">
                <h6>Mulher Maravilha</h6>
                <small className="timeago">Visto por último: Quinta-feira às 16:00</small>
              </div>
            </header>

            <main>

            </main>

            <footer>
            
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default Whatsapp;