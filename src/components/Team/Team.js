import React from 'react';

import TeamIngredient from './TeamIngredient/TeamIngredient';
import classes from './Team.module.css';

const team = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return  <TeamIngredient key={igKey + i} type={igKey} />
            });
        });
    return (
        <div className={classes.Team}>
            <TeamIngredient type="lead"/>
            {transformedIngredients}
        </div>
    );
};

export default team;