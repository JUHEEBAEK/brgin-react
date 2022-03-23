import React from "react";
import PropTypes from 'prop-types';


class Hello extends React.Component {
    render() {
      return (
        <h1>Hello, {this.props.name}</h1>
      );
    }
  }

Hello.defaultProps = {
    name: "React"
}

Hello.propTypes = {
    name: PropTypes.string
  };

export default Hello;