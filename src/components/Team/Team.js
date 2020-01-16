import React from 'react';

import TeamIngredient from './TeamIngredient/TeamIngredient';
import classes from './Team.module.css';

const team = (props) => {
    return (
        <div className={classes.Team}>
            <TeamIngredient type="bread-top"/>
            <TeamIngredient type="cheese"/>
            <TeamIngredient type="meat"/>
            <TeamIngredient type="bread-bottom"/>
        </div>
    );
};

export default team;