import React from 'react';

import classes from './Ninja.module.css';

const Ninja = props => {
    return (
        <li className={classes.ninjaitem}>
            <div className={classes.ninjaitema}>
             <div className={classes.ninjacontent}>
                <div className={classes.ninjainfo}>
                   <h2>{props.name}</h2> 
                   <h3>{props.role}</h3>
                   <h3>{props.projects}</h3>
                </div>
             </div>
            </div>
        </li>
    )
}

export default Ninja;

