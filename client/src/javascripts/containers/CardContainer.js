import React, { Component } from 'react';
import { CardDetail } from '../components';

const card = {
  name: "Hi",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit assumenda iste, incidunt mollitia eveniet iure nobis ad deserunt qui similique error, eius quis dolor eum magni, nihil placeat fuga asperiores?"
};

class CardContainer extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      isOpen: true
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="CardContainer">
        <CardDetail
          card={card}
          toggle={this.toggle}
          isOpen={this.state.isOpen}
          onSubmit={() => console.log('Submitting...')} />
      </div>
    );
  }
}

export default CardContainer;
