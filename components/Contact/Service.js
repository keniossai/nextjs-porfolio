import React, { Component } from 'react'
import styled from 'styled-components'
import { Footer } from '../Footer/Footer'

export default class Service extends Component {
  render() {
    return (
      <>
        <div className='transition'></div>
        <div className='transition2'></div>
        <Services>
            <ServiceInner>
                <ServiceTop>
                    <div className="title">Get In Touch!</div>
                    <div className="sub">Got a question, proposal or project or want to work <br /> together on something? Feel free to reach out.</div>
                    <form action="">
                        <div className="input_row">
                            <div className="side">
                                <label htmlFor="name">Your name</label>
                                <input name='name' placeholder='Whats your name ?' id='name' type="text" />
                            </div>
                            <div className="side">
                                <label htmlFor="name">Your Email</label>
                                <input name='name' placeholder='Whats your email ?' id='name' type="text" />
                            </div>
                        </div>
                        <div className="textarea">
                            <label htmlFor="Message">Your Message</label>
                            <textarea name="message" id="message" placeholder="Hello, I think we need you to work on/collaborate this particular product... Reach out as soon as you can." ></textarea>
                        </div>
                    </form>
                </ServiceTop>
            </ServiceInner>
        </Services>
        <Footer />
      </>
    )
  }
}

const Services = styled.div`
    height: 100%;
    visibility: visible;
    position: relative;
    background: #0b0b0f;
    color: #fff;
    z-index: 2;
`

const ServiceInner = styled.div`
    opacity: 1;
`

const ServiceTop = styled.div`
    min-height: calc(var(--vh, 1vh)*100);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 60px 150px 20px;

    .title{
        font-size: 30px;
        font-family: "Manrope",sans-serif;
        font-weight: 800;
        margin-bottom: 30px;
        color: #8d61ec;
    }
    .sub{
        text-align: center;
        line-height: 1.3;
        font-size: 20px;
        color: #868f97;
        margin-bottom: 50px;
    }

    form{
        width: 70%;
        min-width: 450px;
    }

    .input_row{
        display: flex;
        justify-content: space-between;
    }

    .side{
        width: 45%;

        label{
            margin-top: 20px;
            display: block;
            text-transform: capitalize;
            color: #868f97;
            font-size: 12px;
            margin-bottom: 5px;
        }

        input{
            border: 0;
            border-radius: 0;
            box-sizing: border-box;
            border-bottom: 1px solid #fff;
            background: transparent;
            outline: none;
            box-shadow: none;
            text-align: left;
            font-size: 14.5px;
            width: 100%;
            color: #fff;
            padding: .6em .6em .6em 0;
        }
    }

    .textarea{
        margin-top: 90px;

        label{
            margin-top: 20px;
            display: block;
            text-transform: capitalize;
            color: #868f97;
            font-size: 12px;
            margin-bottom: 5px;
        }

        textarea{
            border: 0;
            border-radius: 0;
            box-sizing: border-box;
            border-bottom: 1px solid #fff;
            background: transparent;
            outline: none;
            box-shadow: none;
            text-align: left;
            font-size: 14.5px;
            width: 100%;
            color: #fff;
            padding: .6em .6em .6em 0;
        }
    }

`
