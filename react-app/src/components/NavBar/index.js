import React from "react";
import{Nav, NavLink, Bars, NavMenu} from  './NavBarElements';

const NavBar = () => {
        return(
                <>
                 <Nav> 
                         <NavLink to="/">
                                 Jerônimo
                         </NavLink>
                         <Bars />

                         <NavMenu>
                                  <NavLink to="/seguranca" activeStyle>
                                        Segurança
                                 </NavLink>
                                 <NavLink to="/testes" activeStyle>
                                        Testes
                                 </NavLink>
                                 <NavLink to="/vulnerabilidades" activeStyle>
                                        Vulnerabilidaes e Invasão
                                 </NavLink>
                                 <NavLink to="/sobre" activeStyle>
                                        Sobre
                                 </NavLink>
                         </NavMenu>

                 </Nav>
                </>
        )
}

export default NavBar;