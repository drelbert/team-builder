import React from 'react';

import TeamIngredient from './TeamIngredient/TeamIngredient';
import classes from './Team.module.css';
//Receiving ingredients as props here from the TeamBuild component
const team = (props) => {
    //Setting up for an array of keys/strings with Object.keys returning an array
    let transformedNinjas = Object.keys(props.ninjas)
        .map(ninjaKey => {
            return [...Array(props.ninjas[ninjaKey])].map((_, i) => {
                return  <TeamIngredient key={ninjaKey + i} type={ninjaKey} />
            });
        })
        //Transforming the array into an empty array that is ready to rec the team ingredients
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedNinjas.length === 0) {
        transformedNinjas = <p>Please Add Team Members</p>
    }
    console.log(transformedNinjas);

    return (
        <div className={classes.Team}>
            {transformedNinjas}
        </div>
    );
};


//Line from the <div> for hardcoding the <TeamIngredient type="lead"/>

export default team;