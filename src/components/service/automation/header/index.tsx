import React, { CSSProperties } from "react";

export const Automationheader: React.FC = () => {
    return (
        <div className="header_container">
            <div className="flexRow">
                <h1 className="header__title">Automation</h1>
                <img
                    className="headerImg"
                    src="../images/brain.png"
                    alt="BigCo Inc. logo"
                />
            </div>
            <div className="paddingTop">
                <div className="spacer"></div>
                <div className="flexRow full-width-section">
                    <h1 className="headerTitle">
                        {/* All about <br/>
                        ioToad */}
                        <div className="headerTitle__underline"></div>
                    </h1>
                    <div className="headerContent__wrapper">
                        <p>
                            The wheels of innovation keep turning at an
                            ever-faster pace. Automate your business processes
                            to keep up with the times. Of course, not all of
                            your business can be automated, but with each
                            passing year more and more components can be. That's
                            why ioToad is so into the idea of kiazen. This
                            Japanese idea is a business management philosophy
                            aimed at producing ongoing incremental improvements
                            throughout an organization, especially in quality
                            and efficiency.
                            <br />
                            At ioToad we know that kiazen is the way to go when
                            working with established businesses, especially in
                            relation to automation. Little by little, we can
                            create tools, programs, and bots that improve
                            business efficiency, customer service, and product
                            quality.
                            <br />
                            Get in touch today to have a free consult with
                            ioToad to see what bits of business we can automate
                            together. Click the toad to contact us
                        </p>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
};
