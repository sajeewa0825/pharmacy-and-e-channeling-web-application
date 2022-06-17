import React from 'react'
import Service from './Service/Service';
import Slide from './Slide/Slide';
import Techdetails from './Technicaldetails/techSlide';
import Drservice from './dService/drService';
import Blog from './Blog/Blog';


const Home = () => {
    return (
        <div>
            <Slide />
            <Service />
            <Techdetails/>
            <Drservice/>
            <Blog/>
        </div>
    )
}

export default Home;