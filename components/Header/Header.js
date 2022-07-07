import React, { useState } from 'react'
import { Nav, HeaderItems, Link, HamBurger, HamBurgerIcon, Menu, NavPrimary, MenuContent, MenuTitle, NavSecondary, MenuLinks, MenuItem } from './Headerstyles'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
// import { Link } from 'react-router-dom'

const  Header = () => {
  const [show, setShow] = useState(false)

  
    return (
      <Nav>
        <HeaderItems>
            <Link>
                <span className='svg'>K</span> <span className='ossai'>OSSAI</span>
            </Link>
            <HamBurger onClick={()=>setShow(true)}>
                {/* <HiOutlineMenuAlt4 onClick={()=>setShow(true)} className='icon' /> */}
                <HamBurgerIcon >

                </HamBurgerIcon>
            </HamBurger>
        </HeaderItems>
        {
          show ? <Menu onClick={()=>setShow(false)} className='menu'>
          <NavPrimary>
            <MenuContent>
                <MenuTitle>Menu</MenuTitle>
                <MenuLinks>
                  <MenuItem data-text="Home">
                    <a href="">Home</a>
                  </MenuItem>
                  <MenuItem data-text="About Me">
                    <a href="">About Me</a>
                  </MenuItem>
                  <MenuItem data-text="Contact">
                    <a href="">Contact</a>
                  </MenuItem>
                  <MenuItem data-text="GitHub">
                    <a href="">GitHub</a>
                  </MenuItem>
                  <MenuItem data-text="LinkedIn">
                    <a href="">LinkedIn</a>
                  </MenuItem>
                </MenuLinks>
            </MenuContent>
          </NavPrimary>
          <NavSecondary>

          </NavSecondary>
        </Menu> : null
        }
      </Nav>
    )
}

export default Header
