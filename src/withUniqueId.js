import uniqueId from 'lodash.uniqueid';
import {
  compose,
  withState,
  mapProps,
  setDisplayName,
} from 'recompose';
import { omit, merge } from 'ramda';

const generateIntId = () => uniqueId();

const withUniqueId = (config) => (WrappedComponent) => {
  const {
    prefix,
    generateId,
  } = merge({
    prefix: '',
    generateId: generateIntId,
  }, config);

  const enhance = compose(
    setDisplayName('WithUniqueId'),
    withState('id', 'setId', (props) => {
      return `${props.prefix || prefix}${generateId()}`;
    }),
    mapProps(omit([ 'setId', 'prefix' ])),
  );

  return enhance(WrappedComponent);
};

export default withUniqueId;
