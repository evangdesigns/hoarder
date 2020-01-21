import React from 'react';

import stuffData from '../../../helpers/data/stuffData';
import authData from '../../../helpers/data/authData';
import './NewStuff.scss';

class NewStuff extends React.Component {
  state = {
    itemName: '',
    itemImage: '',
    itemDescription: '',
  }

  componentDidMount() {
    const { stuffId } = this.props.match.params;
    if (stuffId) {
      stuffData.getSingleItem(stuffId)
        .then((response) => {
          this.setState({ itemName: response.data.itemName, itemImage: response.data.itemImage, itemDescription: response.data.itemDescription });
        })
        .catch((err) => console.error('this shit aint workin', err));
    }
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
  }

  imageChange = (e) => {
    e.preventDefault();
    this.setState({ itemImage: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ itemDescription: e.target.value });
  }

  editItemEvent = (e) => {
    e.preventDefault();
    const { stuffId } = this.props.match.params;
    const newStuffInfo = {
      itemName: this.state.itemName,
      itemImage: this.state.itemImage,
      itemDescription: this.state.itemDescription,
      uid: authData.getUid(),
    };
    stuffData.updateItem(stuffId, newStuffInfo)
      .then(() => this.props.history.push('/stuff'))
      .catch((errFromEditItem) => console.error(errFromEditItem));
  }

  saveItemEvent = (e) => {
    e.preventDefault();
    const newItem = {
      itemName: this.state.itemName,
      itemImage: this.state.itemImage,
      itemDescription: this.state.itemDescription,
      uid: authData.getUid(),
    };
    stuffData.saveItem(newItem)
      .then(() => this.props.history.push('/stuff'))
      .catch((errFromAddItem) => console.error(errFromAddItem));
  }

  render() {
    const { itemName, itemImage, itemDescription } = this.state;
    const { stuffId } = this.props.match.params;
    return (
      <div className="ItemForm">
      <form className="col-6 offset-3">
        <div className="form-group">
          <label htmlFor="item-name">Item Name</label>
          <input
          type="text"
          className="form-control"
          id="item-name"
          placeholder="Enter item name"
          value={itemName}
          onChange={this.nameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="item-image">Item Image</label>
          <input
          type="text"
          className="form-control"
          id="item-image"
          placeholder="Enter item image"
          value={itemImage}
          onChange={this.imageChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="item-description">Item Description</label>
          <input
          type="text"
          className="form-control"
          id="item-description"
          placeholder="Enter item description"
          value={itemDescription}
          onChange={this.descriptionChange}
          />
        </div>
        { stuffId
          ? <button className="btn btn-danger" onClick={this.editItemEvent}>UPDATE BOARD</button>
          : <button className="btn btn-danger" onClick={this.saveItemEvent}>SAVE BOARD</button>
        }
      </form>
      </div>
    );
  }
}

export default NewStuff;
