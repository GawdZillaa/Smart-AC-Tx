import React from 'react';
import Crest from '../../assets/tx-seal.png';
import TexasFlag from '../../assets/tx-flag.png';
import TexasMap from '../../assets/tx-map.jpg';
import AboutText from '../../copies/about.json';
import './About.css';

const aboutPageTitle="About Texas";

const About = () =>{

    return(
        <div
            className="aboutContainer"
        >
            <div
                className="titleContainer"
            >
                <img 
                    src={Crest}
                    style={{
                        height:200,
                        width:200
                    }}
                    alt={""}
                />
                <h1
                    className="aboutTitle"
                >
                    {aboutPageTitle}
                </h1>
            </div>

            <div
                className="flagAndDesc"
            >
                <div
                    className="flagAndDesc_FlagContainer"
                >
                    <img 
                        alt={""}
                        src={TexasFlag}
                        className="texasFlag"
                    />
                </div>
                <div
                    className="flagAndDesc_DescContainer"
                >
                    <p>
                        {AboutText&&AboutText.aboutText1}
                    </p>
                </div>

            </div>
            <div
                className="flagAndDesc"
            >
                <div
                    className="flagAndDesc_DescContainer"
                >
                    <p>
                        {AboutText&&AboutText.aboutText2}
                    </p>
                </div>
                <div
                    className="flagAndDesc_FlagContainer"
                >
                    <img 
                        alt={""}
                        src={TexasMap}
                        className="texasMap"
                    />
                </div>
            </div>
        </div>
    )
}

export default About;