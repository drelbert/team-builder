import React, { Component } from "react";

import Auxiliary from '../../hoc/Auxiliary';
import Team from '../../components/Team/Team';
import BuildControls from "../../components/Team/BuildControls/BuildControls";
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Team/OrderSummary/OrderSummary';

//Mapping of the ninjas hourly rate and this is a global constant as it is outside of the class
const NINJA_RATES =  {
    lead: 80,
    dev: 90
}

class TeamBuild extends Component {
    //Constructor syntax example that would work
    // constructor(props) {
    //     super(props);
    //     this.state = {...}
    // }
    //This is the modern approach
    state = {
        ninjas: {
            lead: 0,
            dev: 0
        },
        //Adding an hourly rate property 
        baseRate: 80,
        //Adding a property connected to the send invite method
        sendInvitations: false,
        invited: false
    }

    //Method for handling the send invite state
    //const sum for turning object into an array of values
    updateInviteState (ninjas) {
        const sum = Object.keys(ninjas)
            .map(ninjaKey => {
                return ninjas[ninjaKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({sendInvitations: sum > 0});
    }

    //Method for invited state
    //Since the inviteHandler is event driven...
    //need an arrow function that will contain the state/context of 'this'
    invitedHandler = () => {
        this.setState({invited: true});
    }

    
    //Two methods for managing the team state 
    //In the updatedNinjas const there is an object using the spread operator to put the old ingredient properties state into the new object 
    addNinjaHandler = (type) => {
        const oldCount = this.state.ninjas[type];
        const updatedCount = oldCount + 1;
        const updatedNinjas = {
            ...this.state.ninjas
        };
        updatedNinjas[type] = updatedCount;
        const rateAddition = NINJA_RATES[type];
        const oldTotal = this.state.baseRate;
        const newTotal = oldTotal + rateAddition;
        this.setState({baseRate: newTotal, ninjas: updatedNinjas});
        this.updateInviteState(updatedNinjas);
    }

    removeNinjaHandler = (type) => {
        const oldCount = this.state.ninjas[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedNinjas = {
            ...this.state.ninjas
        };
        updatedNinjas[type] = updatedCount;
        const rateSubtraction = NINJA_RATES[type];
        const oldTotal = this.state.baseRate;
        const newTotal = oldTotal - rateSubtraction;
        this.setState({baseRate: newTotal, ninjas: updatedNinjas});
        this.updateInviteState(updatedNinjas);
    }


    render () {
        const disabledInfo = {
            ...this.state.ninjas
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Auxiliary>
                <Modal show={this.state.invited}>
                    <OrderSummary ninjas={this.state.ninjas}/>
                </Modal>
                <Team ninjas={this.state.ninjas} />
                <BuildControls
                    ninjaAdded={this.addNinjaHandler}
                    ninjaRemoved={this.removeNinjaHandler} 
                    disabled={disabledInfo} 
                    sendInvitations={this.state.sendInvitations}
                    invited={this.invitedHandler}
                    rate={this.state.baseRate} />
            </Auxiliary>
        );
    }
}

export default TeamBuild; 