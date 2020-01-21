import React, { Component } from "react";

import Auxiliary from '../../hoc/Auxiliary';
import Team from '../../components/Team/Team';

class TeamBuild extends Component{
    //Constructor syntax example that would work
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    //But this is the more up to date approach
    state = {
        ingredients: {
            lead: 1,
            dev: 1
        }
    }

    render () {
        return (
            <Auxiliary>
                <Team ingredients={this.state.ingredients}/>
                <div>Build Controls</div>
            </Auxiliary>
        );
    }
}

export default TeamBuild; 