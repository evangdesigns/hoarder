import React from 'react';
import { Link } from 'react-router-dom';

import stuffShape from '../../../helpers/propz/stuffShape';

import './StuffCard.scss';

class Board extends React.Component {
  static propTypes = {
    stuff: stuffShape.stuffShape,
  }

  render() {
    const { stuff } = this.props;

    return (
      <div className="card align-middle col-3">
        <div className="card-body">
          {/* <button className="btn btn-danger" onClick={ / }>X</button> */}
          <img src={stuff.itemImage} alt={stuff.itemName}/>
          <h3 className="card-title">{stuff.itemName}</h3>
          <Link className="btn btn-link" to={`/stuff/${stuff.id}`}>VIEW ITEM</Link>
          <Link className="btn btn-link" to={`/stuff/${stuff.id}/edit`}>EDIT</Link><br/>
        </div>
      </div>
    );
  }
}

export default Board;
