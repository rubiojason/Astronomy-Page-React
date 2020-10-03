import React, { useState } from 'react'
import FirstPage from './FirstPage'
import BeforeTest from './BeforeTest'


function Images() {

    //state
    const [checkPage, setCheckPage] = useState('images')
    //state 

    //functions 
    const handleArticlePage = () => {
        setCheckPage('article')
    }

    const handleTestPage = () => {
        setCheckPage('test')
    }
    //functions

    //conditions
    if (checkPage === 'article') {
        return <FirstPage/>
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
                        <li className="navTag" onClick={handleArticlePage} >Article</li>
                        <li className="navTag" style={{color: 'rgb(255, 200, 0)'}}>Images</li>
                        <li className="navTag" onClick={handleTestPage} >Take Test</li>
                    </ul>

                </nav>

                <div>
                    <div className="titleCard">
                        <div className="articleTitle">Images</div>
                    </div>

                    <div className="grid-container">

                        <div className="grid-content1">
                            <img alt="" src='https://cdn.stocksnap.io/img-thumbs/960w/tree-night_JO6K51KINA.jpg' />
                        </div>

                        <div className="grid-content2">
                            <img alt="" src='https://images.pexels.com/photos/544268/pexels-photo-544268.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                        </div>

                        <div className="grid-content3">
                            <img alt="" src='https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
                        </div>
                        
                        <div className="grid-content4">
                            <img alt="" src='https://cdn.stocksnap.io/img-thumbs/960w/lunar-eclipse_HUA3BCJDOF.jpg'/>
                        </div>

                        <div className="grid-content5">
                            <img alt="" src='https://images.pexels.com/photos/39896/space-station-moon-landing-apollo-15-james-irwin-39896.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                        </div>

                        <div className="grid-content6">
                            <img alt="" src='https://images.unsplash.com/photo-1532692966749-619e0feb9e78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80'/>
                        </div>

                        <div className="grid-content7">
                            <img alt="" src='https://images.unsplash.com/photo-1507499739999-097706ad8914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80'/>
                        </div>

                        <div className="grid-content8">
                            <img alt="" src='https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1387&q=80'/>
                        </div>

                        <div className="grid-content9">
                            <img alt="" src='https://cdn.stocksnap.io/img-thumbs/960w/space-rocket_QLUDFQYYWK.jpg' />
                        </div>

                        <div className="grid-content10">
                            <img alt="" src='https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1940&q=80' />
                        </div>

                        <div className="grid-content11">
                            <img alt="" src='https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' />
                        </div>

                        <div className="grid-content12">
                            <img alt="" src='https://cdn.stocksnap.io/img-thumbs/960w/space-rocket_QLXO02GEWL.jpg' />
                        </div>

                        <div className="grid-content13">
                            <img alt="" src='https://cdn.stocksnap.io/img-thumbs/960w/abstract-particles_X61ITHOAT6.jpg' />
                        </div>

                        <div className="grid-content14">
                            <img alt="" src='https://images.unsplash.com/photo-1535635790206-6960f6eaacff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' />
                        </div>

                        <div className="grid-content15">
                            <img alt="" src='https://cdn.stocksnap.io/img-thumbs/960w/rocketship-spaceship_IETQP9ZADV.jpg' />
                        </div>

                        <div className="grid-content16">
                            <img alt="" src='https://cdn.stocksnap.io/img-thumbs/960w/satellite-earth_MHYMD23JF3.jpg' />
                        </div>

                        <div className="grid-content17">
                            <img alt="" src='https://images.pexels.com/photos/3274903/pexels-photo-3274903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                        </div>

                        <div className="grid-content18">
                            <img alt="" src='https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                        </div>

                        <div className="grid-content19">
                            <img alt="" src='https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                        </div>

                        <div className="grid-content20">
                            <img alt="" src='https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
                        </div>

                    </div>

                    <div className="bottomEnd"></div>
                </div>

            </div>
        )
    }
}

export default Images
