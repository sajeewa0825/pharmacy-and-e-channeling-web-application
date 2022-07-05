import React from 'react'
import Service from './component/Service/Service';
import Slide from './component/Slide/Slide';
import Techdetails from './component/Technicaldetails/techSlide';
import Drservice from './component/dService/drService';
import Bord from './component/Blog/Bord';


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