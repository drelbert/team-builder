import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './TeamIngredient.module.css';

//Adding {} to allow for adding of some logic prior to returning JSX
class TeamIngredient extends Component {
    render () {
        let ingredient = null;

    switch (this.props.type) {
        case ('lead'):
            ingredient = <div className={classes.Lead}></div>;
            break;
        case ('dev'):
            ingredient = <div className={classes.Dev}></div>;
            break;
        default:
            ingredient = null;
    }

    return ingredient;
  }
} 
//Prop type validation: note string vs number, bool, etc
TeamIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default TeamIngredient;