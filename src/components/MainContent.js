import React, { useState, useEffect } from 'react'
import { array } from "../data/data"
import Result from "./Result"
import Timer from "./Timer"

function MainContent() {

    const [index, setIndex] = useState(0);
    const data = array[index];
    const length = array.length;

    const [ansArr, setAnsarr] = useState([...Array(length)].map(x => -1))

    const [isSubmitted, setIsSubmitted] = useState(false)


    const shift = (direction) => {
        if (direction === "right") {
            setIndex(index + 1)
        } else if (direction === "left") {
            setIndex(index - 1)
        }
    }


    const setAnswer = (num) => {

        setAnsarr(ansArr.map((ans, ind) => {
            if (ind !== index) return ans;
            return num;
        }))

    }

    const currentQuestion = <section className="current-ques-sect">

        <header className={index===0?'first-question':'all-other-questions'}>
            {index > 0 && 
            
            <button onClick={() => shift("left")}>
                <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>
            </button>}
            
            {index < length - 1 && 
            
            <button onClick={() => shift("right")}>
                <svg viewBox="0 0 24 24" width="30" height="30" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
            </button>
            }

        </header>

        <div className="current-ques-body-div">
            <div className="ques-content-div">
                <h5>Question: {data.question}</h5>
            </div>

            <div className="ques-options-div">
                {
                    data.options.map((option, ind) => {
                        return <p>
                            
                            <span className="option-btn"> <button onClick={() => setAnswer(ind)} className={ansArr[index] !== -1 && ansArr[index] === ind ? 'selected-btn' : ''}
                            
                            ></button> </span> {option}
                            
                            </p>
                    })
                }
            </div>

            <div className="final-submit-btn-div">
                <button onClick={() => {
                    setIsSubmitted(true)
                }}>Submit</button>
            </div>
        </div>

    </section>


    const resultSection = <section className="result-side-div">
        
        <div className="side-div-header-icon">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
        </div>
        
        <div className="side-div-header-text">
            <p>Review answers here</p>
        </div>

        <div>
            {
                ansArr.map((ans, ind) => {
                    return <p>{ind + 1}.  {ans !== -1 && array[ind].options[ans]}</p>
                })
            }
        </div>

    </section>



    if (isSubmitted) {
        return <Result answers={ansArr}></Result>
    }


    return (
        <div className="main-container">
            <Timer setIsSubmitted={()=>setIsSubmitted(true)}/>
            <div className="row main-content-row">

                <div className="col col-md-3 col-sm-12">
                    {resultSection}
                </div>


                <div className="col col-md-9 col-sm-12">

                    <div className="question-container">
                        <div className="question-containter-header-div">
                            <p>
                                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                            </p>
                            <h3>Attempt questions here</h3>
                        </div>
                        {currentQuestion}
                    </div>

                </div>

            </div>
        </div>
    )
}


export default MainContent