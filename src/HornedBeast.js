import React from 'react';
import { Card, Button } from 'react-bootstrap';

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

  render() {
    return (
      <>
        <Card bg={'light'} border={'primary'}className="text-center mb-2">
          <Card.Img variant="top" src={this.props.src} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Button variant="primary" style={{width: '15rem' }} onClick={this.handleClick}>💗{this.state.votes}</Button>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default HornedBeast;
