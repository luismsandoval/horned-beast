import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      votes: 0
    }
  }

  handleClick = () => {
    this.setState({ votes: this.state.votes + 1 }
    )
  }

  liftState = () => {
    this.props.handleShowModal(this.props.title);
  }

  render() {
    return (
      <>
        <Card bg={'light'} border={'primary'} className="text-center mb-2">
          <Card.Img variant="top" src={this.props.src} onClick={this.liftState}/>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Button variant="primary" style={{ width: '15rem' }} onClick={this.handleClick}>💗{this.state.votes}</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default HornedBeast;
