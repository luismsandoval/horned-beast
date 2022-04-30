import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SelectedBeast from './SelectedBeast';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0,
      showModal: false
    }
  }

  handleClick = () => {
    this.setState({ votes: this.state.votes + 1 }
    )
  }

  handleCloseModal = () => {
    this.setState({showModal: false});
  }

  handleShowModal = () => {
    this.setState({showModal: true});
  }

  render() {
    return (
      <>
        <Card bg={'light'} border={'primary'} className="text-center mb-2">
          <Card.Img variant="top" src={this.props.src} onClick={this.handleShowModal}/>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Button variant="primary" style={{ width: '15rem' }} onClick={this.handleClick}>💗{this.state.votes}</Button>
            <SelectedBeast showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} title={this.props.title} description={this.props.description} src={this.props.src} />
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default HornedBeast;
