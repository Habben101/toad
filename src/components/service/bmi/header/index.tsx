import React from "react";
import SvgBimteam from "@components/icons/Bimteam";
import ControlledSlider from "../slider/Slider";
import Input from "../input/input";

const max = 2000;
const min = 100;
const step = 100;
const value = 200;

const onShoreMax = 250;
const onShoreMin = 25;
const onShoreStep = 1;
const onShoreValue = 200;

class BMIHeader extends React.Component {
    state = {
        // Set state values to reflect consts/props
        sum: value,
        sliderSum: value,
        step: step,
        pers: "41%",
        salary: "$3900",
        perHour: "$19.50",
        saving: "$2740",
        salaryInfo: "$6100",
        BmiPro: 1,
    };
    onShoreState = {
        sum: onShoreValue,
        sliderSum: onShoreValue,
        step: onShoreStep,
    };

    //   onInputChange2 = value => {
    //       if (value) {
    //           const sum = parseInt(value, 10)
    //           this.onShoreState({
    //             sum: sum
    //           });
    //       }
    //   }

    onInputChange = (value: any) => {
        if (value) {
            const sum = parseInt(value, 10);
            this.setState({
                sum: sum,
            });
            if (value == 100) {
                this.setState({
                    pers: "7%",
                    salary: "$3256",
                    perHour: "$32.56",
                    saving: "$234",
                    salaryInfo: "$3050",
                    BmiPro: 1,
                });
            } else if (value == 200) {
                this.setState({
                    pers: "41%",
                    salary: "$3900",
                    perHour: "$19.50",
                    saving: "$2740",
                    salaryInfo: "$6100",
                    BmiPro: 1,
                });
            } else if (value == 300) {
                this.setState({
                    pers: "41%",
                    salary: "$5944",
                    perHour: "$19.81",
                    saving: "$4186",
                    salaryInfo: "$9150",
                    BmiPro: 1,
                });
            } else if (value == 400) {
                this.setState({
                    pers: "50%",
                    salary: "$6589",
                    perHour: "$16.47",
                    saving: "$6691",
                    salaryInfo: "$12200",
                    BmiPro: 2,
                });
            } else if (value == 500) {
                this.setState({
                    pers: "50%",
                    salary: "$8433",
                    perHour: "$16.87",
                    saving: "$8337",
                    salaryInfo: "$15250",
                    BmiPro: 3,
                });
            } else if (value == 600) {
                this.setState({
                    pers: "55%",
                    salary: "$8978",
                    perHour: "$14.96",
                    saving: "$10942",
                    salaryInfo: "$18300",
                    BmiPro: 3,
                });
            } else if (value == 700) {
                this.setState({
                    pers: "54%",
                    salary: "$10722",
                    perHour: "$15.32",
                    saving: "$12688",
                    salaryInfo: "$21350",
                    BmiPro: 4,
                });
            } else if (value == 800) {
                this.setState({
                    pers: "58%",
                    salary: "$11167",
                    perHour: "$13.96",
                    saving: "$15393",
                    salaryInfo: "$24400",
                    BmiPro: 4,
                });
            } else if (value == 900) {
                this.setState({
                    pers: "57%",
                    salary: "$12811",
                    perHour: "$14.23",
                    saving: "$17239",
                    salaryInfo: "$27450",
                    BmiPro: 5,
                });
            } else if (value == 1000) {
                this.setState({
                    pers: "60%",
                    salary: "$13150",
                    perHour: "$13.16",
                    saving: "$20044",
                    salaryInfo: "$30500",
                    BmiPro: 5,
                });
            } else if (value == 1100) {
                this.setState({
                    pers: "60%",
                    salary: "$14600",
                    perHour: "$13.27",
                    saving: "$22090",
                    salaryInfo: "$33550",
                    BmiPro: 6,
                });
            } else if (value == 1200) {
                this.setState({
                    pers: "63%",
                    salary: "$14844",
                    perHour: "$12.37",
                    saving: "$24996",
                    salaryInfo: "$36600",
                    BmiPro: 6,
                });
            } else if (value == 1300) {
                this.setState({
                    pers: "62%",
                    salary: "$16289",
                    perHour: "$12.53",
                    saving: "$16289",
                    salaryInfo: "$39650",
                    BmiPro: 7,
                });
            } else if (value == 1400) {
                this.setState({
                    pers: "65%",
                    salary: "$16433",
                    perHour: "$11.74",
                    saving: "$30074",
                    salaryInfo: "$42700",
                    BmiPro: 7,
                });
            } else if (value == 1500) {
                this.setState({
                    pers: "65%",
                    salary: "$17678",
                    perHour: "$11.79",
                    saving: "$17678",
                    salaryInfo: "$45750",
                    BmiPro: 8,
                });
            } else if (value == 1600) {
                this.setState({
                    pers: "65%",
                    salary: "$17822",
                    perHour: "$11.14",
                    saving: "$35298",
                    salaryInfo: "$48800",
                    BmiPro: 8,
                });
            } else if (value == 1700) {
                this.setState({
                    pers: "66%",
                    salary: "$18967",
                    perHour: "$11.16",
                    saving: "$37643",
                    salaryInfo: "$51850",
                    BmiPro: 9,
                });
            } else if (value == 1800) {
                this.setState({
                    pers: "68%",
                    salary: "$18911",
                    perHour: "$10.51",
                    saving: "$40849",
                    salaryInfo: "$54900",
                    BmiPro: 9,
                });
            } else if (value == 1900) {
                this.setState({
                    pers: "68%",
                    salary: "$19956",
                    perHour: "$10.50",
                    saving: "$43294",
                    salaryInfo: "$57950",
                    BmiPro: 10,
                });
            } else if (value == 2000) {
                this.setState({
                    pers: "70%",
                    salary: "$19800",
                    perHour: "$9.90",
                    saving: "$46600",
                    salaryInfo: "$61000",
                    BmiPro: 10,
                });
            }

            // Update slider with new value only if it’s within the sliders domain
            if (sum >= min && sum <= max) {
                this.setState({ sliderSum: sum });
            }
        } else {
            // Empty string is preferred when dealing with controlled components
            this.setState({ sum: "" });
        }
    };
    
    onSlideStart = (value: any) => {
        // Set the step value sent to the slider when the user starts dragging
        this.setState({ step: step });
    };
    onSliderChange = (value: any) => {
        const sum = parseInt(value, 10);

        // When the slider is changed, set both input and slider values to reflect new value
        this.setState({
            sum,
            sliderSum: sum,
        });
        if (value == 100) {
            this.setState({
                pers: "7%",
                salary: "$3256",
                perHour: "$32.56",
                saving: "$234",
                salaryInfo: "$3050",
                BmiPro: 1,
            });
        } else if (value == 200) {
            this.setState({
                pers: "41%",
                salary: "$3900",
                perHour: "$19.50",
                saving: "$2740",
                salaryInfo: "$6100",
                BmiPro: 1,
            });
        } else if (value == 300) {
            this.setState({
                pers: "41%",
                salary: "$5944",
                perHour: "$19.81",
                saving: "$4186",
                salaryInfo: "$9150",
                BmiPro: 1,
            });
        } else if (value == 400) {
            this.setState({
                pers: "50%",
                salary: "$6589",
                perHour: "$16.47",
                saving: "$6691",
                salaryInfo: "$12200",
                BmiPro: 2,
            });
        } else if (value == 500) {
            this.setState({
                pers: "50%",
                salary: "$8433",
                perHour: "$16.87",
                saving: "$8337",
                salaryInfo: "$15250",
                BmiPro: 3,
            });
        } else if (value == 600) {
            this.setState({
                pers: "55%",
                salary: "$8978",
                perHour: "$14.96",
                saving: "$10942",
                salaryInfo: "$18300",
                BmiPro: 3,
            });
        } else if (value == 700) {
            this.setState({
                pers: "54%",
                salary: "$10722",
                perHour: "$15.32",
                saving: "$12688",
                salaryInfo: "$21350",
                BmiPro: 4,
            });
        } else if (value == 800) {
            this.setState({
                pers: "58%",
                salary: "$11167",
                perHour: "$13.96",
                saving: "$15393",
                salaryInfo: "$24400",
                BmiPro: 4,
            });
        } else if (value == 900) {
            this.setState({
                pers: "57%",
                salary: "$12811",
                perHour: "$14.23",
                saving: "$17239",
                salaryInfo: "$27450",
                BmiPro: 5,
            });
        } else if (value == 1000) {
            this.setState({
                pers: "60%",
                salary: "$13150",
                perHour: "$13.16",
                saving: "$20044",
                salaryInfo: "$30500",
                BmiPro: 5,
            });
        } else if (value == 1100) {
            this.setState({
                pers: "60%",
                salary: "$14600",
                perHour: "$13.27",
                saving: "$22090",
                salaryInfo: "$33550",
                BmiPro: 6,
            });
        } else if (value == 1200) {
            this.setState({
                pers: "63%",
                salary: "$14844",
                perHour: "$12.37",
                saving: "$24996",
                salaryInfo: "$36600",
                BmiPro: 6,
            });
        } else if (value == 1300) {
            this.setState({
                pers: "62%",
                salary: "$16289",
                perHour: "$12.53",
                saving: "$16289",
                salaryInfo: "$39650",
                BmiPro: 7,
            });
        } else if (value == 1400) {
            this.setState({
                pers: "65%",
                salary: "$16433",
                perHour: "$11.74",
                saving: "$30074",
                salaryInfo: "$42700",
                BmiPro: 7,
            });
        } else if (value == 1500) {
            this.setState({
                pers: "65%",
                salary: "$17678",
                perHour: "$11.79",
                saving: "$17678",
                salaryInfo: "$45750",
                BmiPro: 8,
            });
        } else if (value == 1600) {
            this.setState({
                pers: "65%",
                salary: "$17822",
                perHour: "$11.14",
                saving: "$35298",
                salaryInfo: "$48800",
                BmiPro: 8,
            });
        } else if (value == 1700) {
            this.setState({
                pers: "66%",
                salary: "$18967",
                perHour: "$11.16",
                saving: "$37643",
                salaryInfo: "$51850",
                BmiPro: 9,
            });
        } else if (value == 1800) {
            this.setState({
                pers: "68%",
                salary: "$18911",
                perHour: "$10.51",
                saving: "$40849",
                salaryInfo: "$54900",
                BmiPro: 9,
            });
        } else if (value == 1900) {
            this.setState({
                pers: "68%",
                salary: "$19956",
                perHour: "$10.50",
                saving: "$43294",
                salaryInfo: "$57950",
                BmiPro: 10,
            });
        } else if (value == 2000) {
            this.setState({
                pers: "70%",
                salary: "$19800",
                perHour: "$9.90",
                saving: "$46600",
                salaryInfo: "$61000",
                BmiPro: 10,
            });
        }
    };

    render() {
        return (
            <div className="header_container">
                <h1 className="header__title">BMI Services</h1>
                <SvgBimteam />

                <div className="paddingTop">
                    <div className="spacer"></div>
                    <div className="full-width-section">
                        <h1 className="headerTitle bmi">
                            Optimising building performance in design,
                            <br /> construction and operation
                            <div className="headerTitle__underline"></div>
                        </h1>
                        <div className="headerContent__wrapper bmi">
                            <p>
                                Keeping track of 3d systems requires a lot of
                                time and attention to detail, but modeling can
                                prevent costly mistakes from taking place in the
                                field. IOToad allows companies to scale their
                                virtual modeling capacity while eliminating much
                                of the burden of bringing on a new hire.
                                <br />
                                Prices for local engineers and overseas
                                engineers are presented below. Prices shown
                                include all applicable charges and fees for
                                monthly packages.
                            </p>
                        </div>
                    </div>
                    <div className="flexRow full-width-section">
                        <h1 className="headerTitle">
                            Offshore Pricing
                            <div className="headerTitle__underline"></div>
                        </h1>
                        <div className="headerContent__wrapper">
                            <p>
                                IOToad's experienced American engineers oversee
                                junior engineers from developing countries
                                across Africa. Junior engineers handle the
                                majority of the modeling work. The experienced
                                engineers oversee the projects, make design
                                decisions, and interact with project staff from
                                all involved parties. This setup ensures that
                                your company is always working with someone who
                                understands the project and has the ability to
                                respond in real time, while also granting
                                affordable pricing, and quick turnaround time.
                            </p>
                            <br />
                            <p>
                                IOToad recognizes the need to create a more
                                equitable future especially for those who have
                                been underserved by the global economic system,
                                that's why we pay our eningeers double the
                                standard rate within their country. Paying more
                                than fair wages feels good, is still much
                                cheaper than hiring entry level engineers
                                stateside, and gives us the opportunity to hire
                                extraordinarly talented engineers.
                            </p>
                            <div className="bmiSlider_wrapper">
                                <label htmlFor="sliderinput">
                                    Slide or type to see how much your company
                                    can save:
                                </label>
                                <Input
                                    name={"sliderinput"}
                                    id={"sliderinput"}
                                    value={this.state.sum}
                                    
                                    onChange={(e : any) =>
                                        this.onInputChange(e.target.value)
                                    }
                                    onFocus={() => this.setState({ step: 1 })} // When the input is focused, set step value to 1
                                />
                                <ControlledSlider
                                    min={min}
                                    max={max}
                                    step={this.state.step}
                                    defaultValue={this.state.sliderSum}
                                    
                                    onUpdate={(value: any) =>
                                        this.onSliderChange(value)
                                    }
                                    
                                    onSlideStart={(value: any) =>
                                        this.onSlideStart(value)
                                    }
                                />
                            </div>
                            <div>
                                <h2>
                                    Save {this.state.pers} on{" "}
                                    {this.state.BmiPro} full time BIM Pros*
                                </h2>
                                <h3>
                                    {this.state.sum} hours for{" "}
                                    {this.state.salary} ({this.state.perHour}{" "}
                                    per hour){" "}
                                </h3>
                                <p>
                                    * Savings of {this.state.saving} per month
                                    on {this.state.sum} hours of BIM Modeling.
                                    Prices are compared to hiring{" "}
                                    {this.state.BmiPro} full time BIM Pros in
                                    the US. The cost of a BIM Modeler in the US
                                    is based on full time salary information
                                    from talent.com ({this.state.salaryInfo}).
                                </p>
                                <br />
                                <p>
                                    ‡ All rates are shown as monthly rates
                                    inclusive of all applicable fees. All hours
                                    will be prorated and billed accordingly. We
                                    know some hours are worth more than others,
                                    that's why we'll always be honest with you
                                    about how long our work took, and how long
                                    we think our work should have taken. We'll
                                    never charge you for unproductive time and
                                    work hard to bill fairly.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flexRow full-width-section">
                    <h1 className="headerTitle">
                            Onshore Pricing 🇺🇸
                        <div className="headerTitle__underline"></div>
                    </h1>
                    <div className="headerContent__wrapper">
                        <p>
                        Work directly with American engineers (namely John Brindley) to satisfy the demands of time sensitive and complex projects.
                        </p>
                        <br/>
                        <div className="bmiSlider_wrapper">
                            <label htmlFor="sliderinput">Slide or type for pricing::</label>
                            <Input
                                name={"sliderinputPrice"}
                                id={"sliderinputPrice"}
                                value={this.onShoreState.sum}
                                onChange={e => this.onInputChange2(e.target.value)}
                                onFocus={() => this.setState({ step: 1 })} // When the input is focused, set step value to 1
                            />
                            <ControlledSlider
                                min={onShoreMin}
                                max={onShoreMax}
                                step={this.onShoreState.step}
                                defaultValue={this.onShoreState.sliderSum}
                                onUpdate={value => this.onSliderChange(value)}
                                onSlideStart={value => this.onSlideStart(value)}
                            />
                            
                        </div>
                        <div>
                                <h4>100 hours for $5650 ($56.50 per hour)†</h4>
                                <p>† All rates are shown as monthly rates inclusive of all applicable fees. A minimum of 25 hours will be billed if any modeling work is assigned and delivered during the pay period. We know some hours are worth more than others, that's why we'll always be honest with you about how long our work took, and how long we think our work should have taken. We'll never charge you for unproductive time.</p>
                        </div>
                        
                    </div>
                    
                </div> */}
                </div>
            </div>
        );
    }
}

export default BMIHeader;
