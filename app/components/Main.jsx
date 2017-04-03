import React from 'react';

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <div className="fullWidth row">
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
