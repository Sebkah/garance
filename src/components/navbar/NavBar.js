import React from 'react';

import NavItem from './NavItem';

function NavBar() {
  return (
    <div className="NavBar">
      <h1>GARANCE DJIAN</h1>
      <div className="navItems">
        <NavItem url="/CV" title="cv" />
        <NavItem url="/fresnes" title="Mairie de Fresnes" color="red" />
        <NavItem url="/theatre" title="Théâtre" color="blue" />
        <NavItem url="/terrevivante" title="Terre Vivante" />
        <NavItem url="/resto" title="Restaurant" />
      </div>
    </div>
  );
}

export default NavBar;
