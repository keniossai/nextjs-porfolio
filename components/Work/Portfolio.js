import React, { Component } from 'react'
import Image from 'next/image'
import { LandingWork, FadeInTitle, Title, Boxes, Link, BlueContainer, RedContainer, DarkblueContainer, BoxContent, BoxTitle, BoxTitleLink, BoxtitleSub, LinkDiv, BoxImage, More, ButtonContent, } from './ProjectStyles'

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
                    iEnergy Africa
                  </BoxTitle>
                    <BoxtitleSub>
                    iEnergy is Africa’s authoritative energy news site.
                    </BoxtitleSub>
                      <BoxTitleLink>
                        View Project
                      </BoxTitleLink>
                  
                </BoxContent> 
                <BoxImage>
                  <Image  src="/energy.png" width={700} height={400} alt='Insurance Meets Tech' />
                </BoxImage>
              </Link>
            </LinkDiv>
            <LinkDiv>
              <BlueContainer>
                <BoxContent>
                  <BoxTitle>
                    LSETF
                  </BoxTitle>
                    <BoxtitleSub>
                     LSETF is a website for online conference 
                    </BoxtitleSub>
                      <BoxTitleLink>
                        View Project
                      </BoxTitleLink>
                </BoxContent> 
                <BoxImage>
                <Image src="/imt.png" width={700} height={400} alt='Insurance Meets Tech' />
                </BoxImage>
              </BlueContainer>
            </LinkDiv>
            <LinkDiv>
              <DarkblueContainer>
                <BoxContent>
                  <BoxTitle>
                    Insurance Meets Tech
                  </BoxTitle>
                    <BoxtitleSub>
                    A website for growth and development 
                    </BoxtitleSub>
                      <BoxTitleLink>
                        View Project 
                      </BoxTitleLink>
                </BoxContent> 
                <BoxImage>
                  <Image src="/imt.png" width={700} height={400} alt='Insurance Meets Tech' />
                </BoxImage>
              </DarkblueContainer>
            </LinkDiv>
            <LinkDiv>
              <RedContainer>
                <BoxContent>
                <BoxTitle>
                    Insurance Meets Tech
                  </BoxTitle>
                    <BoxtitleSub>
                    A website for growth and development 
                  </BoxtitleSub>
                    <BoxTitleLink>
                      View Project 
                    </BoxTitleLink>
                </BoxContent> 
                <BoxImage>
                 <Image src="/imt.png" width={700} height={400} alt='Insurance Meets Tech' />
                </BoxImage>
              </RedContainer>
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
