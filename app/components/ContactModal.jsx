import React from 'react'


const ContactModal = React.createClass({

  dontCloseModal(e) {
    e.stopPropagation()
  },

  render () {
    return (
      <div className="modal-overlay" onClick={this.props.onModalClose}>
        <div className="modal small-12 medium-6 large-4" onClick={this.dontCloseModal}>
          <div className="modal-menu">
            <a href="https://twitter.com/davfry" target="_blank" className="modal-menu-item">TWITTER</a>
            <a href="mailto:dave@iamdavefryer.com" className="modal-menu-item">EMAIL</a>
          </div>
        </div>
      </div>
    );
  }
});

export default ContactModal
