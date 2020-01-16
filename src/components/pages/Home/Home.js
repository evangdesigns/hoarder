import React from 'react';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <h1>Home Page</h1>
        <div className="boards d-flex flex-wrap justify-content-center">
          <p>THIS IS A PILE OF TRASH</p>
        </div>
      </div>
    );
  }
}

export default Home;
