import React, { useState, useEffect } from 'react'
import './App.css'


const Timer = () => {
    const endDate = new Date('05/13/2023 12:00 PM').getTime()
    const [time, setTime] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })


    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentTime = new Date().getTime()
            const distance = endDate - currentTime
            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24))
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
                const seconds = Math.floor((distance % (1000 * 60)) / 1000)
                setTime({ days, hours, minutes, seconds })
            } else {
                clearInterval(intervalId)
                setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })
            }
        }, 1000)       
        return () => clearInterval(intervalId)

    }, [])


    return (
        <div className='bg'>
            <h1>big sale on lifetime plan</h1>
            <p>there is very little left</p>
            <div className='timer'>
                {time.days !== 0 && (
                    <div className='parent'>
                        <div className='numbers'>{time.days > 9 ? time.days : `0${time.days}`} <p>|</p></div>
                        <div className='text'>days</div>
                    </div>
                )}
                {time.hours !== 0 && (
                    <div className='parent'>
                        <div className='numbers'>{time.hours > 9 ? time.hours : `0${time.hours}`} <p>|</p></div>
                        <div className='text'>hours</div>
                    </div>
                )}
                {time.minutes !== 0 && (
                    <div className='parent'>
                        <div className='numbers'>{time.minutes > 9 ? time.minutes : `0${time.minutes}`} <p>|</p></div>
                        <div className='text'>minutes</div>
                    </div>
                )}
                {time.seconds !== 0 && (
                    <div className='parent'>
                        <div className='numbers'>{time.seconds > 9 ? time.seconds : `0${time.seconds}`} </div>
                        <div className='text'>seconds</div>
                    </div>
                )}
            </div>
        </div>
    )
}


export default Timer