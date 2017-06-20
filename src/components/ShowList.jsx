import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './ShowList.scss';

class ShowList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const parentOffest = document.getElementsByClassName(styles.showList)[0].offsetLeft;
    const selectedOffset = document.getElementsByClassName(styles.selected)[0].offsetLeft;
    const scrollAmount = selectedOffset - parentOffest;

    document.getElementsByClassName(styles.showList)[0].scrollLeft = scrollAmount;
  }
  render() {
    const { shows, selectedId } = this.props;
    return (
      <div className={styles.showListContainer}>
        <div className={styles.showList}>
          {
            shows.map((show) => {
              return (
                <Link key={show.id} to={`/show/${show.id}`} className={styles.link}>
                  <div className={`${styles.showListShow} ${show.id === selectedId ? styles.selected : ''}`}>
                    <img
                      className={styles.showListImage}
                      src={show.product_image_url}
                      alt={show.title}
                    />
                  </div>
                </Link>
              );
            })
          }
        </div>
      </div>
    );
  }
}

ShowList.propTypes = {
  shows: PropTypes.array.isRequired,
  selectedId: PropTypes.number
};

export default ShowList;
