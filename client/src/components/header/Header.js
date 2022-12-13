import React from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import { Button } from "reactstrap";
import "./Header.css";
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div className="header">
        <Container>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="#" className="header__left">
              <b>NHÓM 2 - SHOP</b>
            </NavbarBrand>
            {/* <NavbarToggler onClick={this.toggle} /> */}
            <Collapse
              isOpen={this.state.isOpen}
              navbar
              className="header__right"
            >
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#">HOME</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">SHOP</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">PAGES</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">BLOG</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">CONTACT</NavLink>
                </NavItem>
                <NavItem>
                  <Button className="mx-2" color="primary">
                    ĐĂNG KÝ
                  </Button>{" "}
                </NavItem>
                <NavItem>
                  <Button color="success">ĐĂNG NHẬP</Button>{" "}
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </div>
    );
  }
}
