import React from 'react';
import Button from '../utillits/Button';
const Header = () => {
    return ( 
       <>
        <header className="header">
           <img className="logo" src="images/logo.svg" alt="logo"/>
           <div className="header-desc">
               <h1>A history of everything you copy</h1>
               <p>Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.</p>
           </div>
           <Button/>
       </header>
       </>
    );
}

export default Header;