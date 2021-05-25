import React,{useState, useEffect} from 'react'

export default function Timer(props) {


    const [time, setTime] = useState([0, 5, 0])

    const changeTime = () => {

        if (time[0] === 0 && time[1] === 0 && time[2] === 0) {
            props.setIsSubmitted()
        }
        else if (time[1] === 0 && time[2] === 0) {
            setTime([time[0] - 1, 59, 59]);
        } else if (time[2] === 0) {
            setTime([time[0], time[1] - 1, 59]);
        } else {
            setTime([time[0], time[1], time[2] - 1]);
        }
    };

    useEffect(() => {
        const timer = setInterval(() => changeTime(), 1000);
        return () => clearInterval(timer);
    })


    return (
        <div>
            <div className="row timer-row">
                <h4>You have  {time[0]} hours : {time[1]} minutes : {time[2]} seconds left</h4>
            </div>
        </div>
    )
}
