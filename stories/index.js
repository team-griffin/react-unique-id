import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import UniqueId, { withUniqueId } from '../src';

storiesOf('UniqueId', module)
  .add('<Component/> / render', () => {
    return (
      <UniqueId render={(props) => (
        <div id={props.id}>{props.id}</div>
      )}/>
    );
  })
  .add('<Component/> / component / new', () => {
    const Comp = (props) => (
      <div id={props.id}>{props.id}</div>
    );

    return (
      <UniqueId component={Comp}/>
    );
  })
  .add('<Component/> / component / existing', () => {
    const Comp = (props) => (
      <div id={props.id}>{props.id}</div>
    );

    const comp = (
      <Comp/>
    );

    return (
      <UniqueId component={comp}/>
    );
  })
  .add('<Component/> / prefix', () => {
    return (
      <UniqueId prefix="foo_" render={(props) => (
        <div id={props.id}>{props.id}</div>
      )}/>
    );
  })
  .add('hoc', () => {
    const Comp = withUniqueId({})((props) => (
      <div id={props.id}>{props.id}</div>
    ));

    return (
      <Comp/>
    );
  })
  .add('hoc / runtime prefix', () => {
    const Comp = withUniqueId({})((props) => (
      <div id={props.id}>{props.id}</div>
    ));

    return (
      <Comp prefix="bar_"/>
    );
  })
  .add('hoc / static prefix', () => {
    const Comp = withUniqueId({
      prefix: 'baz_'
    })((props) => (
      <div id={props.id}>{props.id}</div>
    ));

    return (
      <Comp/>
    );
  })
  .add('hoc / generate', () => {
    const Comp = withUniqueId({
      prefix: 'baz_',
      generateId: () => 'hello',
    })((props) => (
      <div id={props.id}>{props.id}</div>
    ));

    return (
      <Comp/>
    );
  })