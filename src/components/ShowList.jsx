import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShowList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const parentOffest = document.getElementsByClassName('showListContainer')[0].offsetLeft;
    const selectedOffset = document.getElementsByClassName('selected')[0].offsetLeft;
    const scrollAmount = selectedOffset - parentOffest;
    
    document.getElementsByClassName('showListContainer')[0].scrollLeft = scrollAmount;
  }
  render() {
    const { shows, selectedId } = this.props;
    return (
      <ul className="showListContainer">
        {
          shows.map((show) => {
            return (
              <Link key={show.id} to={`/show/${show.id}`} className="link">
                <div className={`showListShow ${show.id === selectedId ? 'selected' : ''}`}>
                  <img
                    className="showListImage"
                    src={show.product_image_url}
                    alt={show.title}
                  />
                </div>
              </Link>
            );
          })
        }
      </ul>
    );
  }
}

ShowList.propTypes = {
  shows: PropTypes.array.isRequired,
  selectedId: PropTypes.number
};

export default ShowList;
