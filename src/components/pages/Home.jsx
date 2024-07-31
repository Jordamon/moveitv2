import React from 'react'
import Header from '../header/Header';
// import Featured from '../featured/Featured';
// import Footer from '../footer/Footer';
import '../../App.css';
import './Home.css';

function Home() {
    return (
      <div className="home-container">
        <div>
          <div className='header-home'>
            <Header />
            </div>
          {/* <Featured />
          <Footer /> */}
        </div>
      </div>
    );
  }
  
  export default Home;