import { Nav, NavLink, NavMenu} from './NavbarElement';


const Navbar = () => {
    return (
      <>
        <Nav>
            <NavMenu>
              <NavLink to='/home' spy={true} smooth={true}>Home</NavLink>
              <NavLink to='/education' spy={true} smooth={true}>Education</NavLink>
              <NavLink to='/experience' spy={true} smooth={true}e>Experience</NavLink>
              <NavLink to='/projects' spy={true} smooth={true}>Projects</NavLink>
              <NavLink to='/contact' spy={true} smooth={true}>Contact Me</NavLink>
            </NavMenu>
        </Nav>
      </>
    )
};
export default Navbar;