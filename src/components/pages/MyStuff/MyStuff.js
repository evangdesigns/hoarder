import React from 'react';

import './MyStuff.scss';

class MyStuff extends React.Component {
  render() {
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <div className="boards d-flex flex-wrap justify-content-center">
          <p>This is where my items go</p>
        </div>
      </div>
    );
  }
}

export default MyStuff;
