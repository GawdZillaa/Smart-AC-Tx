import React from 'react';
import FactsSheet from '../../copies/facts.json';
import './Facts.css';
import FactListItem from './FactListItem';

const FactsPageTitle = "Fun Facts about Texas";

const Facts = ({}) =>{

    return(
        <div
            className="factsContainer"
        >
            <div
                className="factTitleContainer"
            >
                <h1>{FactsPageTitle}</h1>
            </div>
            {
                FactsSheet&&
                FactsSheet.facts&&
                FactsSheet.facts.map((factString,factIndex)=>{
                    return(
                        <FactListItem
                            key={factIndex}
                            factString={factString}
                        >
                        </FactListItem>
                    )
                })
            }

        </div>
    )
}

export default Facts;