import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {

    const beastImages = this.props.imageUrls;

    return (
      <>
        <Container fluid="md">
          <Row>
            <Col>
              <HornedBeast title={beastImages[0].title} description={beastImages[0].description} src={beastImages[0].image_url} />
            </Col>

            <Col>
              <HornedBeast title={beastImages[1].title} description={beastImages[1].description} src={beastImages[1].image_url} />
            </Col>
          </Row>

          <Row>
            <Col>
              <HornedBeast title={beastImages[2].title} description={beastImages[2].description} src={beastImages[2].image_url} />
            </Col>

            <Col>
              <HornedBeast title={beastImages[3].title} description={beastImages[3].description} src={beastImages[3].image_url} />
            </Col>
          </Row>

          <Row>
            <Col>
              <HornedBeast title={beastImages[4].title} description={beastImages[4].description} src={beastImages[4].image_url} />
            </Col>

            <Col>
              <HornedBeast title={beastImages[5].title} description={beastImages[5].description} src={beastImages[5].image_url} />
            </Col>
          </Row>

          <Row>
            <Col>
              <HornedBeast title={beastImages[6].title} description={beastImages[6].description} src={beastImages[6].image_url} />
            </Col>

            <Col>
              <HornedBeast title={beastImages[7].title} description={beastImages[7].description} src={beastImages[7].image_url} />
            </Col>
          </Row>

          <Row>
            <Col>
              <HornedBeast title={beastImages[8].title} description={beastImages[8].description} src={beastImages[8].image_url} />
            </Col>

            <Col>
              <HornedBeast title={beastImages[9].title} description={beastImages[9].description} src={beastImages[9].image_url} />
            </Col>
          </Row>

          <Row>
            <Col>
              <HornedBeast title={beastImages[10].title} description={beastImages[10].description} src={beastImages[10].image_url} />
            </Col>

            <Col>
              <HornedBeast title={beastImages[11].title} description={beastImages[11].description} src={beastImages[11].image_url} />
            </Col>
          </Row>

          <Row>
            <Col>
              <HornedBeast title={beastImages[12].title} description={beastImages[12].description} src={beastImages[12].image_url} />
            </Col>

            <Col>
              <HornedBeast title={beastImages[13].title} description={beastImages[13].description} src={beastImages[13].image_url} />
            </Col>
          </Row>

          <Row>
            <Col>
              <HornedBeast title={beastImages[14].title} description={beastImages[14].description} src={beastImages[14].image_url} />
            </Col>

            <Col>
              <HornedBeast title={beastImages[15].title} description={beastImages[15].description} src={beastImages[15].image_url} />
            </Col>
          </Row>

          <Row>
            <Col>
              <HornedBeast title={beastImages[16].title} description={beastImages[16].description} src={beastImages[16].image_url} />
            </Col>

            <Col>
              <HornedBeast title={beastImages[17].title} description={beastImages[17].description} src={beastImages[17].image_url} />
            </Col>
          </Row>

          <Row>
            <Col>
              <HornedBeast title={beastImages[18].title} description={beastImages[18].description} src={beastImages[18].image_url} />
            </Col>

            <Col>
              <HornedBeast title={beastImages[19].title} description={beastImages[19].description} src={beastImages[19].image_url} />
            </Col>
          </Row>

        </Container>
      </>
    )
  }
}

export default Main;
