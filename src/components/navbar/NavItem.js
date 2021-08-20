import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ url, title, color }) => {
  var location = useLocation().pathname;
  let root = document.documentElement;

  const compareURL = () => {
    if (url === location) return true;
    else return false;
  };

  const changeColor = () => {
    console.log(color);

    setTimeout(() => root.style.setProperty('--pageColor', `${color}`), 100);
  };

  return (
    <Link
      className={!compareURL() ? 'NavItem' : 'NavItem active'}
      to={compareURL() ? '/' : url}
      onClick={changeColor}
    >
      {title}
    </Link>
  );
};

export default NavItem;
