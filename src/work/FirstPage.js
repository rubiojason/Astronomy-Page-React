import React, { useState, useRef, useEffect } from 'react'
import Images from './Images'
import BeforeTest from './BeforeTest'
import { gsap } from 'gsap/index';

function FirstPage() {

    //use ref 
        const picAnim = useRef(null)
    //use ref

    //state 
    const [checkPage, setCheckPage] = useState('article')
    //state

    //functions 

    const handleImagePage = () => {
        setCheckPage('images')
    }

    const handleTestPage = () => {
        setCheckPage('test')
    }
    //functions

    //useEffect 
    useEffect(() => {
        gsap.from(picAnim.current, {
            duration: 0.5,
            autoAlpha: 0, 
            ease: 'none',
            delay: 0.5
        })
    })
    //useEffect 

    //conditions 
    if (checkPage === 'images') {
        return <Images/>
    }

    else if (checkPage === 'test') {
        return <BeforeTest/>
    }

    else {
        return (
            <div>
                <nav >

                    <div className="logo">
                        <div className="logoTitle">Astros</div>
                    </div>

                    <ul >
                        <li className="navTag" style={{color: 'rgb(255, 200, 0)'}} >Article</li>
                        <li className="navTag" onClick={handleImagePage} >Images</li>
                        <li className="navTag" onClick={handleTestPage} >Take Test</li>
                    </ul>

                </nav>

                <div>
                    <div className="titleCard">
                        <div className="articleTitle">About the Solor System</div>
                        <div className="byWho">By: Jason Rubio</div>
                    </div>

                    <div className="picture" ref={picAnim}></div>
                </div>

                <div className="text">
                    Astronomy is full of wonders and of the unknown. 
                    From the Earth, to the terrestrial planets, to the gas giants and into 
                    the extraterrestrial, there is so much stuff that we haven't 
                    discovered, like are we the only ones in this universe.
                </div>

                <div className="text">
                    In this Solar System there are 8 planets,the 4 closest to the Sun, 
                    Mercury, Venus, Earth, and Mars.The 4 outer planets, Jupiter, 
                    Saturn, Uranus, and Neptune. Pluto used to be a planet, but was declared 
                    as a dwarf planet in 2005 by International Astronomical Union(IAU). 
                    Since then we have discovered mulitple stuff about our surrounding 
                    planets. Jupiter was found to have 69 natural satellites. Natural satellites are 
                    what bright up the night sky when the Sun goes away on the Earth.
                    Every 4 outer planets in the Solor System were found to have more 
                    than one moon. Jupiter like I already said, 69 moons, Saturn with 
                    over 150 moons, Uranus with 27 moons, and Neptune with 14. 
                    These planets are what's called Gas Giants. Not because of the 
                    mass amount of Moons they have, but because they're made of gas! 
                    If you were to land on any of the 4 planets. You would never 
                    land on solid ground. You would just go from one end to the 
                    other end. While all the chemicals of these 4 planets are 
                    very toxic, we have never tried to land or go there. 
                    At least no humans have. There have been rovers over to 
                    those planets that are controlled by humans, but it just takes 
                    the little robots years to get over there. 
                </div>

                <div className="text">
                    The inner 4 planets in the Solor System actually have a solid
                    ground that you can step and walk on. On the other hand, being
                    on these planets wouldn't be too safe to be on, but atleast
                    we have Earth. The first planetcloseest to the Sun is Mercury.
                    Mercury is the smallest planet in the Solor System now that 
                    Pluto isgone. It is assumed to be the hottest planet in the
                    Solor Systembecause it's the closest to the Sun, but it's not, the
                    hottest planet inthe Solor System would be Venus. Venus is slightly
                    smaller that Earth butis surprisingly the hottest planet in the 
                    Solor System. The reason for thisis because Venus' atmosphere is 
                    mainly made up of  carbon dioxide, so whatcarbon dioxide does is 
                    it vacuums up heat, and stores it and never lets it go. As you can
                    see from the right, Venus is a very bright red and orange color like it's
                    made of magma. It is known to be called Earth's twin, but when it comes to
                    their temperature, they are not alike. 
                </div>

                <div className="contain-seconds">
                    <div className="secondText">
                        The next few planets that are left to talk about are the Earth and Mars. We all know
                        everything about the Earth, beacause it's where we live. We have one natuThe next few planets that are left to talk about are the Earth and Mars. We all know
                        everything about the Earth, beacause it's where we live. We have one natural satellite 
                        and that's the Moon. The Moon is dear to us, it lights up our nights when it's too dark. 
                        The sad thing is, is that every orbit that the Earth completes, which is every year, the 
                        Moon is getting farther away from us by 2 inches. It may not be a lot, but one day far, far 
                        away into the future we will neither see or feel the Moon's light from the night sky. ral satellite 
                        and that's the Moon. The Moon is dear to us, it lights up our nights when it's too dark. 
                        The sad thing is, is that every orbit that the Earth completes, which is every year, the 
                        Moon is getting farther away from us by 2 inches. It may not be a lot, but one day far, far 
                        away into the future we will neither see or feel the Moon's light from the night sky. 
                    </div>
                    
                    <div className="second-image-container">
                        <div className="secondImage">
                            
                        </div>
                    </div>
                    
                </div>

                <div className="text">
                    Mars is known to be the second smallest planet in the Solor System. It is literally half 
                    the size of Earth. It has and is being examined by many astronomers in NASA, SpaceX, 
                    and in many other companies to see if humans can survive on it. The reasaon for this 
                    is because Mars is the only planet in the Solor System that has water. It has a small part 
                    on it that has frozen water. NASA and SpaceX have sent multiple rovers over to Mars to 
                    explore it. As for its natural satellites, it only has 2. Their names are Phobos and Deimos. 
                    Astronomers believe that Mars got these Moons from rocks or asteroids from Jupiter or Saturn.
                    If we were to stand on Mars right now, the Sun would look 2 times smaller that it does on Earth. 
                    Although it doesn't have a strong ozone layer, being on it wouldn't be the healthiest choice. 
                    Not just that, Mars is known to have the strongest dust storms in the Solar System, wind during 
                    a Martian dust storm can go up to speed like 60 miles per hour. A hurricane here on Earth, is 
                    around 70 miles per hour. So the Martian dust storms can be as dangerous as a hurricane here on 
                    Earth. 
                </div>

                <div className="text">
                    This Solar System is full of mysteries of the unknown. From the Moon here on Earth to the 
                    planets out into space, if we really think about it, we really don't know anything about 
                    the planets. Astronomers every single day strive to find new information about planets and 
                    want to get closer and closer to hopefully civilizing Mars into the far future. For now, Mars 
                    is the only target to try to civilize people on, but astronomers have found extraterrestrial 
                    planets outside the Solar System that can be a candidate for people to live in. Although it 
                    would take years for an astronaut to fly all the way out of the Solar System, but it would be 
                    possible to fly there in much less time in the far future. 
                </div>

                <div className="marg"></div>

                <div className="takeTest" onClick={handleTestPage}>
                    <button className="takeTestButton">TakeTest</button>
                </div>

                <div className="marg"></div>
                
                <div className="bottomNav">
                    <div className="bottomNav-sq1">

                        <div className="linkTitle">
                            <div>To Learn More About This Article: </div>
                        </div>

                            <div className="link">
                                <a href="https://solarsystem.nasa.gov/solar-system/our-solar-system/overview/#:~:text=Our%20solar%20system%20consists%20of,of%20asteroids%2C%20comets%20and%20meteoroids."
                                    alt="" 
                                    >solarsystem.nasa.gov</a>
                            </div>

                            <div className="link">
                                <a href="https://www.space.com/56-our-solar-system-facts-formation-and-discovery.html"
                                    alt="" 
                                    >space.com</a>
                            </div>

                            <div className="link">
                                <a href="https://www.nationalgeographic.com/science/space/our-solar-system/"
                                    alt=""
                                    >nationalgeographic.com</a>
                            </div>
                    </div>

                    <div className="bottomNav-sq2">

                        <div className="linkTitle">
                            <div>More: </div>
                        </div>

                            <div className="sq2-sources">
                                Article
                            </div>

                            <div className="sq2-sources" onClick={handleImagePage}>
                                Images
                            </div>

                            <div className="sq2-sources" onClick={handleTestPage} >
                                Take Test
                            </div>

                            {//(checkPage) ? <FirstPage/> : <Images/> }
        }
                    </div>
                </div>

            </div>
        )
    }
}
export default FirstPage
