import React, { useState } from 'react'
import FirstPage from './FirstPage'
import Images from './Images'
import Test from './Test'


function BeforeTest() {

    const [checkPage, setCheckPage] = useState('before test')

    //functions 
    const handleArticlePage = () => {
        setCheckPage('article')
    }

    const handleImagePage = () => {
        setCheckPage('images')
    }

    const handleQuestion1 = () => {
        setCheckPage('question1')
    }
    //functions

    //conditions
    if (checkPage === 'article') {
        return <FirstPage/>
    }
    else if (checkPage === 'images') {
        return <Images/>
    }
    else if (checkPage === 'question1') {
        return <Test/>
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
                        <li className="navTag" onClick={handleImagePage} >Images</li>
                        <li className="navTag" style={{color: 'rgb(255, 200, 0)'}}>Take Test</li>
                    </ul>

                </nav>

                <div className="dis-flex">

                    <div className="this-will-test-container">

                        <div className="this-will-test">
                            <div className="text-align">
                                This test will test you on the information you just read about in the article
                            </div>
                        </div>

                        <div className="button-container">

                            <div className="start-test" onClick={handleQuestion1}>
                                <div className="text-inside-button">Start the Test</div>
                            </div>
                                
                        </div>
                    </div>
                </div>              
            </div>
        )
    }
}
export default BeforeTest
