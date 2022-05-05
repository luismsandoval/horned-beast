import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import imageUrls from './data.json';
import SelectedBeast from './SelectedBeast';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selected: ''
    }
  }

  handleCloseModal = () => {
    this.setState({showModal: false});
  }

  handleShowModal = (beastTitle) => {
    const selected = imageUrls.find(beast => beast.title === beastTitle);
    this.setState({showModal: true, selected});
  }

  render() {
    return (
      <Container>
        <Header />
        <Main imageUrls={imageUrls} handleShowModal={this.handleShowModal}/>
        <Footer />
        <SelectedBeast showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} title={this.props.title} selected={this.state.selected} />
      </Container>
    );
  }
}

export default App;
