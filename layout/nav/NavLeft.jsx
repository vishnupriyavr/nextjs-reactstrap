import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  NavLink,
  UncontrolledCollapse,
} from 'reactstrap';

import { MENUS, SUBMENUS } from '../../constants/menus';

function NavLeft(props) {
  const { activeLink } = props;
  return (
    <>
      <h4 className="headline">NLP Engine</h4>
      <div className="wrapper-list-group">
        <ListGroup flush className="list-group-nav-left" tag="div">
          {MENUS.map((item, k) => {
            const isActive = activeLink === item.name ? true : false;
            return (
              <ListGroupItem
                key={`l${k}`}
                active={isActive}
                tag={item.as}
                href={item.href}
              >
                {item.icon && <i className={item.icon}></i>} {item.label}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    </>
  );
}

export default NavLeft;
