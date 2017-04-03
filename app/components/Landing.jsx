import React from 'react';
import { Link, IndexLink } from 'react-router';
import ContactModal from 'ContactModal';

var Landing = React.createClass({
  getInitialState: function () {
    return {
      modalVisible: false
    }
  },
  onModalOpen: function () {
    this.setState({
      modalVisible: true
    });
  },
  onModalClose: function () {
    this.setState({
      modalVisible: false
    });
  },
  render: function () {
    let renderModal = () => {
      if (this.state.modalVisible) {
        return (
          <ContactModal onModalClose={this.onModalClose}/>
        )
      }
    }
    return (
      <div>
        <div className="bottom-half">
          <div className="bottom-left small-12 medium-6 columns">
            <h1 className="bottom-left-text">IADF_</h1>
          </div>
          <div className="bottom-right small-12 medium-6 columns">
            <div className="menu-container">
              <div className="menu">
                <Link href="https://triptrip.io/" target="_blank" className="menu-item">TRIPTRIP</Link>
                <Link to="/things" target="_blank" className="menu-item">THINGS</Link>
                <Link onClick={this.onModalOpen} className="menu-item">CONTACT</Link>
              </div>
            </div>
          </div>
        </div>
        {renderModal ()}
      </div>
    );
  }
});

module.exports = Landing;
