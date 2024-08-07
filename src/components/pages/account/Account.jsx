import React from 'react'
import Footer from '../../footer/Footer';
import '../../../App.css';
import './Account.css';
import AccountComponent from '../../account/Account';

function Account() {
    return (
      <div className="Account-container">
        <div>
          <AccountComponent />
          <Footer />
        </div>
      </div>
    );
  }
  
  export default Account;