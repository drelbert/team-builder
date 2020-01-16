import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './TeamIngredient.module.css';

//Adding {} to allow for adding of some logic prior to returning JSX
class TeamIngredient extends Component {
    render () {
        let ingredient = null;

    switch (this.props.type) {
        case ('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.seeds1}></div>  
                    <div className={classes.seeds2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingredient = <div className={classes.Meat}></div>;
            break;
        case ('salad'):
            ingredient = <div className={classes.Salad}></div>;
            break;
        case ('cheese'):
            ingredient = <div className={classes.Cheese}></div>;
            break;
        default: 
                ingredient = null;
    }

    return ingredient;
  }
} 

TeamIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default TeamIngredient;