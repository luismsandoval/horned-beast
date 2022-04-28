import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import imageUrls from './data.json';

class App extends React.Component {
  render() {
  return(
    <Container>
      <Header />
      <Main imageUrls={imageUrls}/>
      <Footer />
    </Container>
  );
  }
}

export default App;
