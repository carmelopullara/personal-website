import React, { Component } from 'react';
import Typed from 'typed.js';
import Proptypes from 'prop-types';

class Typing extends Component {
  componentDidMount() {
    const { strings } = this.props;
    const options = {
      strings,
      startDelay: 4500,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      onComplete: (self) => {
        // eslint-disable-next-line
        self.startDelay = 0;
      },
    };
    this.typed = new Typed(this.el, options);
    if (this.el) {
      setTimeout(() => {
        this.el.classList.remove('cursor--hidden');
      }, 4000);
    }
  }

  componentWillUnmount() {
    this.typed.destroy();
    clearTimeout(this.classTimeout);
  }

  render() {
    return (
      <span
        className="cursor--hidden typed-el"
        ref={(el) => {
          this.el = el;
        }}
      />
    );
  }
}

Typing.propTypes = {
  strings: Proptypes.arrayOf(Proptypes.string),
};

Typing.defaultProps = {
  strings: [],
};

export default Typing;
