import styled from 'styled-components'


export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    left: 10px;
    right: 10px;
    padding: 20px 50px 0;
    align-items: center;
    z-index: 10;
`

export const HeaderItems = styled.div`
    /* background: rgba(11, 11, 15, 0.8) none repeat scroll 0% 0%; */
    position: fixed;
    top: 30px;
    left: 30px;
    padding: 10px;
    width: 160px;
    z-index: 10;
`

export const Link = styled.a`
    background: rgba(11, 11, 15, 0.8) none repeat scroll 0% 0%;
    position: fixed;
    top: 30px;
    left: 30px;
    padding: 10px;
    width: 160px;
    z-index: 10;

    .ossai{
        text-decoration: none;
        text-align: center;
        color: #fff;
        font-size: 20px;
        letter-spacing: .2rem;
    }
    .svg{
        font-size: 20px;
        font-weight: bold;
        border: 2px solid #fff;
        padding: 5px 10px;
        border-radius: 100%;
        align-items: center;
        color: #fff;
    }
`

export const HamBurger = styled.div`
    background: rgba(11, 11, 15, 0.8) none repeat scroll 0% 0%;
    cursor: pointer;
    mix-blend-mode: difference;
    width: 60px;
    height: 60px;
    position: fixed;
    right: 30px;
    top: 30px;

    .icon{
        color: white;
        /* width: 25px; */
        font-size: 40px;
    }
`

export const HamBurgerIcon = styled.div`
    color: #fff;
    position: relative;
    top: 50%;
    left: 30%;

    

    ::before{
        content: "";
        position: absolute;
        width: 22px;
        height: 2px;
        background: #fff;
        transition: transform .25s ease-in-out,-webkit-transform .25s ease-in-out;
        transform: rotate(0deg) translateY(-4px);
        color: #fff;
    }

    ::after{
        content: "";
        position: absolute;
        width: 22px;
        height: 2px;
        background: #fff;
        transition: transform .25s ease-in-out,-webkit-transform .25s ease-in-out;
        color: #fff;
        transform: rotate(0deg) translateY(4px);
    }
`

export const Menu = styled.div`
    z-index: 3;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    height: 100%;
    
    /* cursor: none; */
    /* display: none; */

    
`

export const NavPrimary = styled.div`
    transform-origin: 100% 0% 0px;
    transform: translate(0px);
    height: 100%;
    position: relative;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: #0E76A8;
    z-index: 1;
    overflow: hidden;
    display: flex;
    justify-content: center;
`
export const MenuContent = styled.div`
    position: relative;
    top: 120px;
    color: #fff;
    z-index: 0;
`
export const MenuTitle = styled.div`
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: .2em;
    margin-bottom: 30px;
`

export const MenuLinks = styled.div`
    text-align: center;
    font-weight: 800;
    font-size: 48px;
    position: relative;
`

export const MenuItem = styled.div`
    opacity: 1;
    transform: translate(0px);
    margin-bottom: 20px;

    a{
        cursor: pointer;
        transition: all .2s linear;
    }

    ::before{
        content: attr(data-text);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        color: #fff;
        z-index: -1;
        white-space: nowrap;
        font-size: 2em;
        pointer-events: none;
        opacity: 0;
        letter-spacing: 20px;
        transition: .5s;
    }

    :hover::before{
        opacity: .5;
        letter-spacing: 0;
    }
`


export const NavSecondary = styled.div``