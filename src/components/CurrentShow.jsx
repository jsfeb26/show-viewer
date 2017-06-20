import React from 'react';
import PropTypes from 'prop-types';

function CurrentShow({ show }) {
  return (
    <div className="currentShowContainer">
      {show &&
        <div className="currentShow">
          <img
            className="currentShowImage"
            src={show.product_image_url}
            alt={show.title}
          />
          <span className="currentShowTitle">{show.title}</span>
          <span className="currentShowEpisodeCount">{`${show.episodes} Episodes`}</span>
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
