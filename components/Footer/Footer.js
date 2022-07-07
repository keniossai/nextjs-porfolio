import React from 'react'
import { FooterSec, FooterTop, Message, Links, Link, LinkLi, Copyright } from './FooterStyle'

export const Footer = () => {
  return (
    <FooterSec>
        <hr />
        <FooterTop>
            <Message>Say Hello</Message>
            <Links>
                <Link>
                    <p>
                        <a data-text="kenossai1@gmail.com" href="mailto:kenossai1@gmail.com">
                            kenossai1@gmail.com
                        </a>
                    </p>
                </Link>
                <LinkLi className='link'>
                    <p><a data-text='Resume' href="/about">Resume</a></p>
                    <p><a data-text="Contact" href="/contact">Contact</a></p>
                </LinkLi>
            </Links>
        </FooterTop>
        <Copyright>&copy; Kenneth Ossai 2022</Copyright>
    </FooterSec>
  )
}
