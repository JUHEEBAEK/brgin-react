import React from "react";
import PropTypes from 'prop-types';


class Hello extends React.Component {
    render() {
      return (
        <p>Hello, {this.props.name}</p>
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