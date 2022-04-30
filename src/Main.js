import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
                <HornedBeast title={beast.title} description={beast.description} src={beast.image_url} />
              </Col>
            ))}

          </Row>

        </Container>
      </>
    )
  }
}

export default Main;
