import React from 'react';

import NavItem from './NavItem';

function NavBar() {
  return (
    <div className="NavBar">
      <h1>GARANCE DJIAN</h1>
      <div className="navItems">
        <NavItem url="/CV" color="blue" title="cv" />
        <NavItem url="/fresnes" color="red" title="Mairie de Fresnes" />
        <NavItem url="/theatre" color="orange" title="Théâtre" />
        <NavItem url="/terrevivante" color="green" title="Terre Vivante" />
        <NavItem url="/resto" color="yellow" title="Restaurant" />
      </div>
    </div>
  );
}

export default NavBar;
