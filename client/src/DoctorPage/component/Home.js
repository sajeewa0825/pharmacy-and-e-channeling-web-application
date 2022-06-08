import React from 'react'
import Service from './Service/Service';
import Slide from './Slide/Slide';
import Checkout from './Appointment/Checkout';


const Home = () => {
    return (
        <div>
            <Slide />
            <Checkout />
            <Service />
        </div>
    )
}

export default Home;