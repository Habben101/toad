import React from "react";

import { AboutHeader } from "@components";
import { AboutService } from "@components";

const About: React.FC = () => {
    
    
    return (
        <div className="mainContainer About" id="mainContainer">
            <AboutHeader />
            <AboutService />
        </div>
    );
};

export default About;
