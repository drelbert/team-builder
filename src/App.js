import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import TeamBuild from './containers/TeamBuild/TeamBuild';
import Employees from './containers/Employees/Employees';

class App extends Component {
  //Method to return the JSX (html) code below
  render () {
    //Layout is not self closing so it can wrap another component
  return (
    <div>
     <Layout>
        <TeamBuild/>
        <Employees />
     </Layout>
    </div>
  );
 }
}

export default App;
