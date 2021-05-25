import React from 'react'
import { array } from "../data/data"


function Result(props) {

    let cnt = 0;
    props.answers.forEach((item, ind) => {
        cnt += (array[ind].answer === item) ? 1 : 0
    })
    let percentage = 0;
    percentage = (cnt / array.length) * 100

    percentage = percentage.toFixed(2);


    return (
        <div className="result-page-container-div">
            <div className="main-result-body-div">
                <div className="result-body-header">
                    <svg viewBox="0 0 24 24" width="70" height="70" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div className="result-body-details">
                    <div className="result-body-details-heading">
                        <h3>You have successfully submitted the assignment</h3>
                    </div>
                    <div className="result-body-addn-details">
                        <div>Questions asked : {array.length}</div>
                        <div>Questions answered correctly: {cnt}</div>
                        <div>Percentage scored : {percentage} %</div>
                    </div>
                </div>
                <div className="result-body-restart-btn">
                    <button onClick={()=>{
                        window.location.reload()
                    }}>Another chance?</button>
                </div>
            </div>
        </div>
    )
}


export default Result