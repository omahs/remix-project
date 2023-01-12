/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState, useRef, useContext } from 'react'
import { FormattedMessage } from 'react-intl'
import { ThemeContext, themes } from '../themeContext'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const _paq = window._paq = window._paq || [] // eslint-disable-line

function HomeTabFeatured() {
  const themeFilter = useContext(ThemeContext)

  return (
    <div className="pt-3 pl-2" id="hTFeaturedeSection">
      <label style={{ fontSize: "1.2rem" }}><FormattedMessage id='home.featured' /></label>
      <div className="mb-2">
        <div className="w-100 d-flex flex-column" style={{ height: "200px" }}>
          <ThemeContext.Provider value={themeFilter}>
            <Carousel
              arrows={false}
              swipeable={false}
              draggable={true}
              showDots={true}
              responsive={{ desktop: { breakpoint: { max: 2000, min: 1024 }, items: 1 } }}
              renderDotsOutside={true}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              partialVisible={false}
              centerMode={false}
              autoPlay={true}
              keyBoardControl={true}
              containerClass="border w-full carousel-container"
              sliderClass="h-100 justify-content-between"
              deviceType={"desktop"}
              itemClass=""
              autoPlaySpeed={15000}
              dotListClass="position-relative mt-2"
            >
              <div className="mx-1 px-1 d-flex">
                <img src={"assets/img/bgRemi_small.webp"} style={{ flex: "1", height: "170px", maxWidth: "170px" }} alt="" ></img>
                <div className="h6 w-50 p-4" style={{ flex: "1" }}>
                  <h5><FormattedMessage id='home.jumpIntoWeb3' /></h5>
                  
                  <div><FormattedMessage id='home.jumpIntoWeb3Text'/></div>
                  <a className="remixui_home_text btn btn-secondary mt-2 text-decoration-none mb-3" onClick={() => _paq.push(['trackEvent', 'hometab', 'featuredSection', 'jumpIntoWeb3'])} target="__blank" href="https://remix-project.org"><FormattedMessage id='home.more' /></a>
                </div>
              </div>
              <div className="mx-1 px-1 d-flex">
                <img src={"/assets/img/remixRewardUser_small.webp"} style={{ flex: "1", height: "170px", maxWidth: "170px" }} alt="" ></img>
                <div className="h6 w-50 p-4" style={{ flex: "1" }}>
                  <h5><FormattedMessage id='home.remixRewards' /></h5>
                  <p style={{ fontStyle: 'italic' }}><FormattedMessage id='home.remixRewardsText1' /></p>
                  <div><FormattedMessage id='home.remixRewardsText2' /></div>
                  <a className="remixui_home_text btn btn-secondary mt-2 text-decoration-none mb-3" target="__blank" onClick={() => _paq.push(['trackEvent', 'hometab', 'featuredSection', 'remixRewards'])} href="https://rewards.remix.ethereum.eth.limo"><FormattedMessage id='home.more' /></a>
                </div>
              </div>
              <div className="mx-1 px-1 d-flex">
                <img src={"/assets/img/remixRewardBetaTester_small.webp"} style={{ flex: "1", height: "170px", maxWidth: "170px" }} alt="" ></img>
                <div className="h6 w-50 p-4" style={{ flex: "1" }}>
                  <h5><FormattedMessage id='home.betaTesting' /></h5>
                  <p style={{ fontStyle: 'italic' }}><FormattedMessage id='home.betaTestingText1' /></p>
                  <div><FormattedMessage id='home.betaTestingText2' /></div>
                  <a className="remixui_home_text btn btn-secondary mt-2 text-decoration-none mb-3" onClick={() => _paq.push(['trackEvent', 'hometab', 'featuredSection', 'betatesting'])} target="__blank" href="https://docs.google.com/forms/d/e/1FAIpQLSd0WsJnKbeJo-BGrnf7WijxAdmE4PnC_Z4M0IApbBfHLHZdsQ/viewform"><FormattedMessage id='home.more' /></a>
                </div>
              </div>
            </Carousel>
          </ThemeContext.Provider>
        </div>
      </div>
    </div>
  )
}

export default HomeTabFeatured
