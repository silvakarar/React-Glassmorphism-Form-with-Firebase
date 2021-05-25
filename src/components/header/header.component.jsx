import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';


const Header = ({ currentUser }) => {
  return (
    <div className="header">
      {currentUser ? (
        <button className="sign-out" onClick={() => auth.signOut()}>
          Sign Out
        </button>
          ) : (
                
      ''
      )}
    </div>
  );
};

export default Header;
