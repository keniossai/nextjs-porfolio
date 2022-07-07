import React, { Component } from 'react'
import {ContactBlock, Topic, Title} from './ContactStyle'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

export default class Contact extends Component {
  render() {
    return (
      <ContactBlock>
        <Topic>Need a developer ?</Topic>
        <a href="/contact">
            <Title>
                Lets Collaborate  <HiOutlineArrowNarrowRight />
            </Title>
        </a>
      </ContactBlock>
    )
  }
}
