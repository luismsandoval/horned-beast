import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    const beastImages = this.props.imageUrls;

    return (
      <>
        <Container fluid>
          <Row>
            {beastImages.map((beast =>
              <Col>
                <HornedBeast key={beast._id} 
                title={beast.title} 
                description={beast.description} 
                src={beast.image_url}
                handleShowModal={this.props.handleShowModal}/>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Main;
