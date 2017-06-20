import React from 'react';
import PropTypes from 'prop-types';

import styles from './CurrentShow.scss';

function CurrentShow({ show }) {
  if (!show) {
    return null;
  }
  
  return (
    <div className={styles.currentShowContainer}>
      {show &&
        <div className={styles.currentShow}>
          <img
            className={styles.currentShowImage}
            src={show.product_image_url}
            alt={show.title}
          />
          <span className={styles.currentShowTitle}>{show.title}</span>
          <span className={styles.currentShowEpisodeCount}>{`${show.episodes} Episodes`}</span>
        </div>
      }
      {!show &&
        <span>Show Not Found</span>
      }
    </div>
  );
};

CurrentShow.propTypes = {
  show: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    episodes: PropTypes.number,
    product_image_url: PropTypes.string
  }).isRequired
};

export default CurrentShow;
