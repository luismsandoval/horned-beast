import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import beasts from './data.json';
import SelectedBeast from './SelectedBeast';
import { Form } from 'react-bootstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selected: {},
      beasts: beasts
    }
  }

  handleCloseModal = () => {
    this.setState({showModal: false});
  }

  handleShowModal = (beastTitle) => {
    const selected = beasts.find(beast => beast.title === beastTitle);
    this.setState({showModal: true, selected});
  }

  handleOnChange = (e) => {
    e.preventDefault();
    if (e.target.value === 'all') {
      this.setState({beasts: beasts});
    } else if (e.target.value === '1') {
      let newBeasts = beasts.filter(value => value.horns === 1);
      this.setState({beasts: newBeasts});
    } else if (e.target.value === '2') {
      let newBeasts = beasts.filter(value => value.horns === 2);
      this.setState({beasts: newBeasts});
    } else if (e.target.value === '3') {
      let newBeasts = beasts.filter(value => value.horns === 3);
      this.setState({beasts: newBeasts});
    } else if (e.target.value === '100') {
      let newBeasts = beasts.filter(value => value.horns === 100);
      this.setState({beasts: newBeasts});
    }
  }

  render() {
    return (
      <Container>
        <Header />
        <Container>
          <Form>
          <label for="value">Filter by # of horns</label>
          <Form.Control onChange={this.handleOnChange} as='select'>
            <option value='all'>show all</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='100'>100</option>
          </Form.Control>
          </Form>
        </Container>
        <Main beasts={this.state.beasts} handleShowModal={this.handleShowModal}/>
        <Footer />
        <SelectedBeast showModal={this.state.showModal} handleCloseModal={this.handleCloseModal} title={this.props.title} selected={this.state.selected} />
      </Container>
    );
  }
}

export default App;
