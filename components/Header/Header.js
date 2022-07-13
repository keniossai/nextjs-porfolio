import React, { useState } from 'react'
import { Nav, NavbarContainer, Links, MobileIcon, NavItem, NavLinks, NavMenu} from './Headerstyles'
import {FaBars} from 'react-icons/fa'
import Link from 'next/link'

const  Header = ({toggle}) => {
  
    return (
      <Nav>
              <Link href="/">
                <Links>
                    <span className='svg'>K</span> <span className='ossai'>OSSAI</span>
                </Links>
              </Link>
                <MobileIcon onClick={toggle}>
                    <FaBars className='icon' />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <Link href='/resume'>Resume</Link>
                    </NavItem>
                    <NavItem>
                        <Link href='/service'>Contact</Link>
                    </NavItem>
                    <NavItem>
                        <Link href=''>GitHub</Link>
                    </NavItem>
                    <NavItem>
                        <Link href=''>LinkedIn</Link>
                    </NavItem>
                </NavMenu>
      </Nav>
    )
}

export default Header
