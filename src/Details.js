import React, { Component } from "react";
import pf from "petfinder-client";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";

const petfinder = pf();

class Details extends Component {
  state = { loading: true, showModal: false };

  componentDidMount() {
    petfinder.pet
      .get({
        output: "full",
        id: this.props.id
      })
      .then(data => {
        this.setState({
          name: data.petfinder.pet.name,
          animal: data.petfinder.pet.animal,
          location: `${data.petfinder.pet.contact.city}, ${
            data.petfinder.pet.contact.state
          }`,
          description: data.petfinder.pet.description,
          media: data.petfinder.pet.media,
          breed: data.petfinder.pet.breeds.breed,
          loading: false
        });
      });
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }
    const {
      animal,
      breed,
      location,
      description,
      name,
      media,
      showModal
    } = this.state;
    return (
      <div>
        <div className="details">
          <Carousel media={media} />
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                style={{ backgroundColor: theme }}
                onClick={this.toggleModal}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          ;<h3>{description}</h3>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adpot {name}?</h1>
                <div className="buttons">
                  <button onClick={this.toggleModal}>Yes</button>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
