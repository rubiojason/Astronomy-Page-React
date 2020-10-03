import React, { useState } from 'react'
import FirstPage from './FirstPage'
import Images from './Images'
import Results from './Results'

function Test8(props) {
    
    //past scores
        const score1 = props.answer1
        const score2 = props.answer2
        const score3 = props.answer3
        const score4 = props.answer4 
        const score5 = props.answer5
        const score6 = props.answer6
        const score7 = props.answer7
    //past scores

    //state 
        const [answerChosen, setAnswerChosen] = useState('')

        const [checkPage, setCheckPage] = useState('question8')

        const [score, setScore] = useState(0)

        const [errorOpacity, setErrorOpacity] = useState('0')
    //state 

    //question 
        const question = 'What speed can the Marsian dust storms reach? '
    //question 

    //answer 
        const a = '40mph'
        const b = '50mph'
        const c = '60mph'
        const d = '70mph'
    //answer 

    //functions
        const handleSubmit = (e) => {
            e.preventDefault()

            if (answerChosen === c) {
                setErrorOpacity('0')
                setScore(score + 1)
                setCheckPage('results')
            }
            else if (answerChosen === '') {
                setErrorOpacity('1')
            }
            else {
                setErrorOpacity('0')
                setScore(score + 0)
                setCheckPage('results')
            }
        }

        const handleChange = (e) => {
            setAnswerChosen(e.target.value)
        }

        const handleArticlePage = () => {
            setCheckPage('article')
        }

        const handleImagePage = () => {
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
    else if (checkPage === 'results') {
        return <Results answer1={score1} answer2={score2} answer3={score3} answer4={score4} answer5={score5}
                        answer6={score6} answer7={score7} answer8={score} />
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

                <div className="test-div" >

                    <div className="indicator">
                        <div className="indicator-inner">
                            <div className="indicator-content">question 8 of 8</div>
                        </div>
                    </div>

                    <div className="test-box">
                                    
                        <div className="question-box">
                            <div className="question-div">
                                <div className="question">
                                    {question}
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} onChange={handleChange}>
                            <label>
                                <div className="answer-box">
                                    <div className="answer-div">
                                                            
                                        <input type="radio" name="choice" 
                                            value={a} />
                                        <span>
                                            A
                                        </span>

                                        <div className="answer-content">
                                            {a}
                                        </div>
                                                            
                                    </div>
                                </div>
                            </label>

                            <label>
                                <div className="answer-box">
                                    <div className="answer-div">

                                        <input type="radio" name="choice" 
                                            value={b}  />
                                        <span>
                                            B
                                        </span>

                                        <div className="answer-content">
                                            {b}
                                        </div>

                                    </div>
                                </div>
                            </label>

                            <label>
                                <div className="answer-box">
                                    <div className="answer-div">

                                        <input type="radio" name="choice" 
                                            value={c}  />
                                        <span>
                                            C
                                        </span>

                                        <div className="answer-content">
                                            {c}
                                        </div>

                                    </div>
                                </div>
                            </label>

                            <label>
                                <div className="answer-box">
                                    <div className="answer-div">

                                        <input type="radio" name="choice" 
                                            value={d} />
                                            <span>
                                                D
                                            </span>

                                            <div className="answer-content">
                                                {d}
                                            </div>

                                        </div>
                                    </div>
                                </label>
                                           
                                <div className="error-message" style={{opacity: errorOpacity}}>
                                    Please Select an Answer Choice
                                </div>

                                <div className="next-back">

                                    <div className="back-button-container">
                                        <div  className="back-button">Back</div>
                                    </div>

                                    <div className="content-container">
                                        <div className="content">1</div>
                                        <div className="content">2</div>
                                        <div className="content">3</div>
                                        <div className="content">4</div>
                                        <div className="content">5</div>
                                        <div className="content">6</div>
                                        <div className="content">7</div>
                                        <div className="content" style={{backgroundColor: 'rgb(255, 200, 0)', color: 'black'}}>8</div>
                                    </div>

                                    <div className="next-button-container">
                                        <button className="next-button" type='submit'>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Test8
