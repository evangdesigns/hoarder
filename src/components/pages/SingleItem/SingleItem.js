import React from 'react';
import { Link } from 'react-router-dom';
import stuffData from '../../../helpers/data/stuffData';

import './SingleItem.scss';

class SingleItem extends React.Component {
  state = {
    item: {},
  }

  componentDidMount() {
    const { stuffId } = this.props.match.params;
    stuffData.getSingleItem(stuffId)
      .then((response) => {
        this.setState({ item: response.data });
      })
      .catch((err) => console.error('error getting single item', err));
  }

  render() {
    const { item } = this.state;
    return (
      <div className="SingleItem">
        <div className="d-flex flex-wrap justify-content-center">
          <div className="card align-middle col-6">
            <div className="card-body">
              <h1 className="card-title">{item.itemName}</h1>
              <img src={item.itemImage} alt={item.itemName}/>
              <p>{item.itemDescription}</p>
              <Link className="btn btn-link" to={'/stuff'}>BACK</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleItem;
