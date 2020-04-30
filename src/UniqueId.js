import {
  cloneElement,
  createElement,
  isValidElement,
} from 'react';
import withUniqueId from './withUniqueId';
import {
  setDisplayName,
  compose,
} from 'recompose';
import { omit } from 'ramda';

const UniqueId = (props) => {
  const {
    id,
  } = props;

  const cleanProps = omit([
    'component',
    'render',
  ])(props);

  if(props.render != null) {
    return props.render({
      ...cleanProps,
      id,
    });
  } 

  if (isValidElement(props.component) === true) {
    return cloneElement(props.component, {
      id,
    });
  }

  return createElement(props.component, {
    ...cleanProps,
    id,
  });
};

const enhance = compose(
  setDisplayName('UniqueId'),
  withUniqueId({}),
);

export default enhance(UniqueId);
