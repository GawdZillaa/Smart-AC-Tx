import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Texas from '../../assets/tx-logo.png';
import './Header.css'

const Header = ({
    linkList,
    headerTitle
}) =>{

    const [currentHover, setCurrentHover] = useState(null);

    const formatNavString = navString => { return navString.toLowerCase(); }

    let currentRouteLocation = useLocation();
    let { pathname } = currentRouteLocation;
    let extractedLocation = pathname&&pathname.slice(1,pathname.length);

    return(
        <div
            className="headerContainer"
        >
            <div
                className="headerImageContainer"
            >
                <img 
                    src={Texas}
                    className="headerImage"
                    alt={''}
                />
                <h1
                    className="headerTitle"
                >
                    {headerTitle || ''}
                </h1>
            </div>
            <div
                className="linkListContainer"
            >
                <ul
                    className="linkList"
                >
                {
                    linkList&&
                    linkList.map((linkName, linkIndex)=>{
                        return(
                            <li
                                key={linkIndex}
                                className="linkItem"
                            >
                                <Link 
                                    to={`/${formatNavString(linkName)}`}
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize:20,
                                        textDecorationLine:currentHover === linkIndex ?'underline':'none',
                                        textDecorationColor:currentHover === linkIndex ? 'blue' : '',
                                        color:extractedLocation === formatNavString(linkName)?'blue':'grey'
                                    }}
                                    onMouseOver={()=>{
                                        setCurrentHover(val => val = linkIndex);
                                    }}
                                    onMouseLeave={()=>{
                                        setCurrentHover(val => val = null);
                                    }}
                                >
                                    {linkName}
                                </Link>
                            </li>
                        )
                    })  
                }
                </ul>
            </div>
        </div>
    )
}

export default Header;