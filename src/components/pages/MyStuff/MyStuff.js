import React from 'react';
import StuffCard from '../../shared/StuffCard/StuffCard';

import stuffData from '../../../helpers/data/stuffData';
import authData from '../../../helpers/data/authData';

import './MyStuff.scss';

class MyStuff extends React.Component {
  state = {
    stuffs: [],
  }

  getStuff = () => {
    stuffData.getStuffByUid(authData.getUid())
      .then((stuffs) => this.setState({ stuffs }))
      .catch((err) => console.error('errorfrom get stuff', err));
  }

  componentDidMount() {
    this.getStuff();
  }

  deleteItem = (stuffId) => {
    stuffData.deleteItem(stuffId)
      .then(() => this.getStuff())
      .catch((err) => console.error('error deleting item', err));
  }

  render() {
    return (
      <div className="MyStuff">
        <h1>My Stuff</h1>
        <div className="MyStuff d-flex flex-wrap justify-content-center">
          {this.state.stuffs.map((stuff) => <StuffCard key={stuff.id} stuff={stuff} deleteItem={this.deleteItem}/>)}
        </div>
      </div>
    );
  }
}

export default MyStuff;
