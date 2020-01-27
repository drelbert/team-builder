import React,{ Component } from "react";

import Auxiliary from '../../hoc/Auxiliary'
import Ninjas from '../../components/Ninjas/Ninjas';

class Employees extends Component{
    //Lifecycle method
    render() {
        const NINJAS = [
            {
            id:'ninja777',
            name: 'El Inigo Bigmountain',
            role: 'Dev',
            projects: 'Death Star Code Update'
        },
        {
            id:'ninja805',
            name: 'Sonja Jose Guadalupe',
            role: 'Lead',
            projects: 'Death Star Code Update'
        }
    ];

        //Returning theJSX code 
        return (
            <Auxiliary>
                <Ninjas items={NINJAS}/>
                <div>Hold for more as needed</div>
            </Auxiliary>
        );
    }
}

export default Employees;
