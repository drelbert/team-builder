import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import TeamBuild from './containers/TeamBuild/TeamBuild';

class App extends Component {
  render () {
    //Layout is not self closing so it can wrap another component
  return (
    <div>
     <Layout>
        <TeamBuild/>
     </Layout>
    </div>
  );
 }
}

export default App;
