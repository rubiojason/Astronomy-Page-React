import React, { useState } from 'react'
import FirstPage from './FirstPage'
import Images from './Images'

function Results(props) {

    //state 
        const [checkPage, setCheckPage] = useState('results')
    //state 

    var results = Number(props.answer1) + Number(props.answer2) + Number(props.answer3) + Number(props.answer4) + 
                  Number(props.answer5) + Number(props.answer6) + Number(props.answer7) + Number(props.answer8)

    //functions
        const handleArticlePage = () => {
            setCheckPage('article')
        }

        const handleImagesPage = () => {
            setCheckPage('images')
        }
    //functions 

    //conditions 
    if (checkPage === 'article') {
        return <FirstPage/>
    }
    else if (checkPage === 'images') {
        return <Images/>
    }
    else {
        return (
            <div className="whole-page">
                <div className="result-container">
                    <div className="background-container">
                        <div className="result-content">You got a {results} out of 8</div>
                    </div>
                </div>
                
                <div className="button-container">
                    <div className="go-article" onClick={handleArticlePage}>
                        <div className="result-page-button">
                            Go back to Article
                        </div>
                    </div>
                    <div className="go-images" onClick={handleImagesPage} >
                        <div className="result-page-button">
                            Go to Images
                        </div>
                    </div>
                </div>
                    
            
            </div>
        )
    }
}

export default Results
