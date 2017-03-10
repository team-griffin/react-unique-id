# react-unique-id

`npm install @team-griffin/react-unique-id --save`

`yarn add @team-griffin/react-unique-id`

It gets rather annoying coming up with ids for form controls, as well as when you have to deal with looping over form component.
So why not make a react component to do it for us?

UniqueId creates a unique id before the component will be mounted to ensure that the same id is passed down to the component each time. This is to reduce re-renders.

## Usage

```jsx
import UniqueId from '@team-griffin/react-unique-id';

renderX(props) {
  return (
    <div id={props.id}/>
  );
}

render() {
  const component = (
    <div random={true}/>
  );

  return (
    <div>
      <UniqueId component={renderX}/>
      <UniqueId component={renderX} prefix="input"/>
      <UniqueId component={component}/>
    </div>
  );
}

///
<div>
  <div id="id_1"></div>
  <div id="input_1"></div>
  <div id="input_1" random></div>
</div>
```