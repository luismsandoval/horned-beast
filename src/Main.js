import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast title={'Beast of Gevaudan'} description={'Big ol wolf beast'} src={'img/gevaudan.jpg'} />

        <HornedBeast title={'Big Foot (w/ horns)'} description={'You\'ve heard of bigfoot. Well now they have horns.'} src={'img/bigfoot.jpg'} />
      </>
    )
  }
}

export default Main;
