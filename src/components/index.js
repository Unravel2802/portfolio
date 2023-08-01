import { Nav, NavLink, NavMenu} from './NavbarElement';


const NavBar = () => {
    return (
      <>
        <Nav>
          <NavMenu>
            <NavLink to='/education' activeStyle>Education</NavLink>
            <NavLink to='/experience' activeStyle>Experience</NavLink>
            <NavLink to ='/projects' activeStyle>Projects</NavLink>
            <NavLink to = '/contact' activeStyle>Contact Me</NavLink>
          </NavMenu>
        </Nav>
      </>
    )
};
export default NavBar;