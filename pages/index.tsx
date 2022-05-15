import React from "react";
import { Spacer } from "@chakra-ui/react";
import { VideoSlider, Services, Showcase } from "@components";

const Home: React.FC = () => {
    return (
        <div className='mainContainer' id='mainContainer'>
            <VideoSlider />
            <Services />
            <Showcase />
            <Spacer />
        </div>
    );
};

export default Home;
