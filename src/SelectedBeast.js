import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selected.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.selected.description} 
          <img src={this.props.selected.image_url} alt={this.props.selected.title} /> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default SelectedBeast;
