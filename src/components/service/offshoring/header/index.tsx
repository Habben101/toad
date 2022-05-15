import React from "react";

export const Offshoringheader: React.FC = () => {
    return (
        <div className="header_container">
            <div className="flexRow">
                <h1 className="header__title">Offshoring</h1>
                <img
                    className="headerImg"
                    src="../images/team4.png"
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
                            Offshoring business processes can save you barrels
                            of money. Wages in developing nations are remarkably
                            cheap and well-educated candidates abound. All of
                            our development work is handled in collaboration
                            with a number of contractors mostly in Africa. We've
                            worked with contractors all over the southern
                            hemisphere for nearly a decade. Once we know exactly
                            the kind of service you need, we'll handle
                            everything from contracting, training, oversight,
                            and quality assurance.
                            <br />
                            At ioToad, we want your business to benefit from the
                            global economy just like the biggest of companies.
                            Click the toad to get in touch and start saving your
                            business money ASAP!
                        </p>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
};
