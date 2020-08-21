import React from 'react'
import './Facts.css'

const FactListItem = ({
    factString
}) =>{

    return(

        <div
            style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'center',
                alignItems: 'center',
                marginLeft:30
            }}
        >
            <span
                style={{
                    marginRight:15
                }}
            >
                &#8226;
            </span>
            <p
                className="factItem"
            >
                {factString || ''}
            </p>
        </div>

    )
}

export default FactListItem;