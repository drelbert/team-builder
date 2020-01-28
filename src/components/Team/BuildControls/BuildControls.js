import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

//Non exported const array
const controls = [
    { label: 'Lead', type: 'lead' },
    { label: 'Dev', type: 'dev' },
];

//In JSX below is a loop with the controls const 
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Hourly Rate Amount: <strong>{props.rate}</strong></p>
        {controls.map(ctrl =>  (
            <BuildControl 
                key={ctrl.label} 
                label={ctrl.label}
                added={() => props.ninjaAdded(ctrl.type)}
                removed={() => props.ninjaRemoved(ctrl.type)} 
                disabled={props.disabled[ctrl.type]} />
        ))}
        <button 
            className={classes.InviteButton}
            disabled={!props.sendInvitations}
            >INVITE TEAM</button>
    </div>
);
console.log(buildControls);

export default buildControls;