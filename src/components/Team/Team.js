import React from 'react';

import TeamIngredient from './TeamIngredient/TeamIngredient';
import classes from './Team.module.css';
//Receiving ingredients as props here from the TeamBuild component
const team = (props) => {
    //Setting up for an array of keys/strings with Object.keys returning an array
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
                return  <TeamIngredient key={ingredientKey + i} type={ingredientKey} />
            });
        })
        //Transforming the array into an empty array that is ready to rec the team ingredients
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please Add Team Members</p>
    }
    console.log(transformedIngredients);

    return (
        <div className={classes.Team}>

            {transformedIngredients}
        </div>
    );
};


//Line for hardcoding the <TeamIngredient type="lead"/>

export default team;