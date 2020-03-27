import React from "react";
import PropTypes from "prop-types";
import "./Plant.css";

const exposure = [];
const humidity = [];
const temperature = [];

class Plant extends React.PureComponent {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

Plant.propTypes = {
  name: PropTypes.string.isRequired
};

export default Plant;
