import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Search from '../../components/search/Search';
import Card from '../../components/card/card';
import AnimeSlider from '../../components/swiper/swiper';
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="slider-section">
                <AnimeSlider />
            </div>
            <Search />
            <div className="home-content">
                <Card />
            </div>
        </div>
    );
}

export default Home;