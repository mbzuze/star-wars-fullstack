import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


// import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      {/* <Logo className='logo' /> */}
    </Link>
    <div className='options'>
      <Link className='option' to='/'>
        HOME
      </Link>
    </div>
  </div>
);

const mapStateToProps = (state: { user: { currentUser: any; }; }) => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);

// import React from "react";
// import { Link } from "react-router-dom";
// import "./header.syles.scss";


// const Header = () => (
//     <div className="header">
//         <Link className="logo-container" to='/'>
//             {/* <Logo className="logo"></Logo> */}
//         </Link>
//         <div className="options">
//             <Link className="option" to='/characters'>
//                 Characters
//             </Link>
//         </div>
//     </div>
// );

// export default Header;