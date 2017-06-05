import React from 'react';
import { connect } from 'react-redux';

const PetsShow = (props) => {
  const pet = props.pet;

  return (
    <div className="col-md-8">
      <h2>{pet.name}</h2>
      <p>{pet.description}</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const pet = state.pets.find((pet) =>
    pet.id === parseInt(ownProps.routeParams.id)
  );
  return { pet: pet ? pet : {} };
};

export default connect(mapStateToProps)(PetsShow);
