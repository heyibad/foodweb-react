import React from 'react';

const Footer = () => {
  return (
    <>
      <hr />
      <div className="c3 mt-5">
        <h1 className="text-center">CONNECT WITH US</h1>
        <hr className="hr3" />

        <div className="col-lg-4 col-md-6">
          <ul className="list-unstyled d-flex justify-content-center mb-3 mb-md-0">
            <li>
              <a href="https://www.instagram.com/theibadofficial/?hl=en" target="_blank"><i className="fab fa-instagram main-btn fa-2x"></i></a>
            </li>
            <li>
              <a href="https://www.facebook.com/theibadofficial" target="_blank"><i className="fab fa-facebook-f fa-2x main-btn"></i></a>
            </li>
            <li>
              <a href="https://twitter.com/ibadwrites" target="_blank"><i className="fab fa-twitter main-btn fa-2x"></i></a>
            </li>
            <li>
              <a href="#"><i className="fab fa-snapchat main-btn fa-2x"></i></a>
            </li>
          </ul>
        </div>
        <footer className="mt-5">
          <div className="text-center">
            <p>Designed by @ibad3572@gmail.com | Copyright © 2022 All Rights Reserved.</p>
          </div>
        </footer>
        </div>
    </>
  );
};

export default Footer;
