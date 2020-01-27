import React from 'react';

import Ninja from './Ninja/Ninja';
import classes from './Ninjas.module.css';

const Ninjas = props => {
    if (props.items.length === 0) {
        return (
             <div className="center">
                <h2>No Ninjas Found.</h2>
            </div>
    );
}
//Returning a ul. with mapped items into array of JSX elements
return (
    <ul className={classes.ninjas}> 
        {props.items.map(ninja => (
          <Ninja 
            key={ninja.id} 
            id={ninja.id} 
            name={ninja.name}
            role={ninja.role} 
            projects={ninja.projects}
            />
        ))}
    </ul>
  );
};

export default Ninjas;


