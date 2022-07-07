import React, { Component } from 'react'
import { LandingWork, FadeInTitle, Title, Boxes, Link, Link2, BoxContent, BoxTitle, BoxTitleLink, BoxtitleSub, LinkDiv, BoxImage, More, ButtonContent, } from './ProjectStyles'

export default class Portfolio extends Component {

  
  render() {
    return (
      <LandingWork>
          <FadeInTitle>
              <Title>
                  My
                  <br />
                  Projects -
              </Title>
          </FadeInTitle>
          <Boxes>
            <LinkDiv>
              <Link>
                <BoxContent>
                  <BoxTitle>
                    LSETF
                  </BoxTitle>
                    <BoxtitleSub>
                    An online conference website
                    </BoxtitleSub>
                      <BoxTitleLink>
                        View Project 
                      </BoxTitleLink>
                </BoxContent> 
                <BoxImage></BoxImage>
              </Link>
            </LinkDiv>
            <LinkDiv>
              <Link2>
                <BoxContent>
                  <BoxTitle>
                    LSETF
                  </BoxTitle>
                    <BoxtitleSub>
                    An online conference website
                    </BoxtitleSub>
                      <BoxTitleLink>
                        View Project
                      </BoxTitleLink>
                </BoxContent> 
                <BoxImage></BoxImage>
              </Link2>
            </LinkDiv>
          </Boxes>
          <a href="">
            <More>
              <ButtonContent>
                View more projects
              </ButtonContent>
            </More>
          </a>
      </LandingWork>
    )
  }
}
