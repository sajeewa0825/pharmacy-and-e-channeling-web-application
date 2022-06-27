import React from 'react'
import Service from './Service/Service';
import Slide from './Slide/Slide';
import Techdetails from './Technicaldetails/techSlide';
import Drservice from './dService/drService';
import Bord from './Blog/Bord';


const Home = () => {
    return (
        <div>
            <Slide />
            <Service />
            <Techdetails/>
            <Drservice/>
            <Bord/>
        </div>
    )
}

export default Home;