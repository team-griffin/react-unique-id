# react-unique-id

`npm install @team-griffin/react-unique-id --save`

`yarn add @team-griffin/react-unique-id`

It gets rather annoying coming up with ids for form controls, as well as when you have to deal with looping over form component.
So why not make a react component to do it for us?

UniqueId creates a unique id before the component will be mounted to ensure that the same id is passed down to the component each time. This is to reduce re-renders.

## Usage

This package offers unique ids in two flavours, either as a component or a hoc. They both work in the same way. In fact the component version is just a wrapper around the HOC.

### `<UniqueId/>` Component

The component you wish to render can be provided in 3 different forms:
1. A render function. This is good if you have props that need to be mapped due to the new `id` prop
1. A React Component. Use this if you just want an id to be automatically applied to a given component. Avoid passing functions that are created per render in here as React will not be able to determine that they are the same constructor and therefore lots of re-renders
1. A React Symbol (already created Component). You won't use this often, but is useful if the component you want to give an id has already been created somewhere else in the code

The id that is generated is an auto incrementing integer. You can provide a `prefix` prop to have prefixed infront of the output.

```jsx
import UniqueId from '@team-griffin/react-unique-id';

const MyComponentThatNeedsAnId = (props) => (
  <div id={props.id}>
    Hello World!
  </div>
);

// Elsewhere
const MyParentComponent = (props) => {
  // Render method 1
  return (
    <UniqueId render={(props) => {
      <MyComponentThatNeedsAnId
        id={props.id}
      />
    }}/>
  );

  // Render method 2
  return (
    <UniqueId component={MyComponentThatNeedsAnId}/>
  );

  // Render method 3
  const myComp = (
    <MyComponentThatNeedsAnId/>
  );

  return (
    <UniqueId component={myComp}/>
  );
};
```

### `withUniqueId` HOC

Essentially the same as the component, but doesn't care about rendering. Supports both a runtime prefix and a static prefix.
The added benefit of using the HOC implementation is that you can override how the id is generated. This is useful if you want to use a `uuid` or a `ulid` instead of an integer. This is only supported a static time. Just provide it into the HOC config under the key `generateId`. The prefix functionality is still preserved with this enabled.

```jsx
import { withUniqueId } from '@team-griffin/react-unique-id';

const MyComponentThatNeedsAnId = (props) => (
  <div id={props.id}>
    Hello World!
  </div>
);

const enhanced = withUniqueId({
  prefix: string, // Static prefix, will be used if no runtime one is provided
  generateId: () => string, // Defaults to internal `generateIntId`
})(MyComponentThatNeedsAnId);

```