import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ url, title, color }) => {
  var location = useLocation().pathname;
  let root = document.documentElement;

  const compareURL = () => {
    if (url === location) return true;
    else return false;
  };

  return (
    <Link
      style={{ '--pageColor': color }}
      className={!compareURL() ? 'NavItem' : 'NavItem active'}
      to={compareURL() ? '/' : url}
    >
      {title}
    </Link>
  );
};

export default NavItem;
