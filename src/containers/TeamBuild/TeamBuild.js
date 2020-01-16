import React, { Component } from "react";

import Auxiliary from '../../hoc/Auxiliary';
import Team from '../../components/Team/Team';

class TeamBuild extends Component{
    render () {
        return (
            <Auxiliary>
                <Team />
                <div>Build Controls</div>
            </Auxiliary>
        );
    }
}

export default TeamBuild; 