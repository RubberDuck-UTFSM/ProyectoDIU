import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom'

class Ide extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <iframe
        frameBorder="0"
        scrolling="no"
        src={this.props.url}
        style={{ width: '100%', height: '800px' }}
        title="Some Content"
      />
    );
  }
}

export default Ide;