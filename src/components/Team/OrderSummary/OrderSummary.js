import React from 'react';

import Auxiliary from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
    //Given ninjas are in object format
    //Transforming the object to an array of keys and pass it along
    const teamSummary = Object.keys(props.ninjas)
        //Mapping into an array of JSX elements
        .map(ninjaKey => {
            return (
                <li key={ninjaKey}>
                  <span  style={{textTransform: 'capitalize'}}>{ninjaKey}</span>: {props.ninjas[ninjaKey]}
                  </li>
            );
        });

    return (
        <Auxiliary>
            <h3>Current Team Members</h3>
            <ul>
                {teamSummary}
            </ul>
            <p>Continue with invitation?</p>
        </Auxiliary>
    )

};

export default orderSummary;