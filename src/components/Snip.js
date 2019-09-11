import React from 'react';
import he from 'he';

class Snip extends React.Component {
  render() {
    return (
      <div className="snip">
        <div className="text">
          <h2>Title</h2>
          <p>Description</p>
        </div>
        <pre>
          <code className="language">code</code>
        </pre>
      </div>
    );
  }
}

export default Snip;
