import {
  Component,
  PropTypes,
  cloneElement,
  createElement,
  isValidElement,
} from 'react';
import uniqueId from 'lodash.uniqueid';

class UniqueId extends Component {
  static defaultProps = {
    component: null,
    prefix: 'id_',
  };

  static PropTypes = {
    component: PropTypes.node.isRequired,
    prefix: PropTypes.string,
  };

  componentWillMount() {
    this.id = uniqueId(this.props.prefix);
  }

  render() {
    let el;
    if (isValidElement(this.props.component) === true) {
      el = cloneElement(this.props.component, {
        id: this.id,
      });
    } else {
      el = createElement(this.props.component, {
        ...this.props,
        id: this.id,
      });
    }
    return el;
  }
}

export default UniqueId;