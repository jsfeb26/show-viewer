import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ShowList from '../components/ShowList';
import CurrentShow from '../components/CurrentShow';
import { shows } from '../shows.json';

class ShowViewer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shows
    }
  }
  render() {
    const { shows } = this.state;
    const showId = Number(this.props.match.params.showId) || 1;

    return (
      <div>
        <ShowList shows={shows} selectedId={showId} />
        <CurrentShow show={shows.find((show) => show.id === showId)} />
      </div>
    );
  }
}

ShowViewer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      showId: PropTypes.string
    })
  })
};

export default ShowViewer;
