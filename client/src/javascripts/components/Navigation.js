import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const Navigation = ({
  brand,
  currentUser,
  boards,
  onClickBoard,
  isOpen,
  toggle,
  onClickBoardCreate
}) => (
  <div className="Navigation">
    <Navbar color="faded" light expand="md">
      <NavbarBrand href="/">
        <img src="/djello.png" alt="Djello" className="brand img-responsive" />
        {brand}
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        {currentUser ? (
          <Nav className="ml-auto" navbar>
            {/* Current User */}
            <NavItem>
              <NavLink disabled>
                {currentUser.email}
              </NavLink>
            </NavItem>

            {/* Boards */}
            <UncontrolledDropdown nav>
              <DropdownToggle nav caret>
                Boards
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <a href="" onClick={e => {
                    e.preventDefault();
                    onClickBoardCreate();
                    return false;
                  }}>
                    + Create Board
                  </a>
                </DropdownItem>
                <DropdownItem divider />
                {boards.length ? (
                  boards.map(board => (
                    <DropdownItem className="text-muted" key={board.id}>
                      <NavLink
                        activeClassName="active"
                        to={`/boards/${ board.id }`}
                        tag={RRNavLink}>
                        {board.name}
                      </NavLink>
                    </DropdownItem>
                  ))
                ) : (
                  <DropdownItem className="text-muted">
                    No boards
                  </DropdownItem>
                )}
              </DropdownMenu>
            </UncontrolledDropdown>

            {/* Logout */}
            <NavItem>
              <NavLink
                activeClassName="active"
                to="/logout"
                tag={RRNavLink}>
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        ) : null}
      </Collapse>
    </Navbar>
  </div>
);

export default Navigation;
