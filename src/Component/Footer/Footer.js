import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
        <div className="wrapFooter">
            <div className="refBlock">
                <a href="#" >Support</a>
                <a href="#" >Learning</a>
                <a href="#" >Русская версия</a>
            </div>
            <div className="Rights">
                &copy;2021&nbsp;Sergey&nbsp;Sotnikov 
            </div>
        </div>        
    </footer>
  );
}

export default Footer;