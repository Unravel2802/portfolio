import { Nav, NavLink, NavMenu} from './NavbarElement';


const Navbar = () => {
    return (
      <>
        <Nav>
            <NavMenu>
              <NavLink to='/home' activeStyle>Home</NavLink>
              <NavLink to='/education' activeStyle>Education</NavLink>
              <NavLink to='/experience' activeStyle>Experience</NavLink>
              <NavLink to='/projects' activeStyle>Projects</NavLink>
              <NavLink to='/contact' activeStyle>Contact Me</NavLink>
            </NavMenu>
        </Nav>
      </>
    )
};
export default Navbar;