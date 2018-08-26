# Flexible React Clipboard

A simple and flexible React utility component for copying texts to the clipboard.

## Getting Started

The component passed in the `render` prop will have the `copy` function passed in as a prop.
The `copy` function will copy the `text` prop to the clipboard.

```
import React from "react";
import Clipboard from "simple-react-clipboard";

const Demo = () => (
  <Clipboard
    text={"Copy on Button Click"}
    render={({copy}) => <button onClick={copy}>Copy</button>}
  />
)

export default Demo;
```

## Sample Code

Demo and sample code can be found [here](http://donfour.github.io/simple-react-clipboard).

## Props

render: PropTypes.func.isRequired
text: PropTypes.string.isRequired
props: PropTypes.object
onSuccess: PropTypes.func
onError: PropTypes.func

Name | Type | Description | Required
--- | --- | --- | ---
`render` | `function` | A function that returns a React element. | Y
`text` | `string` | The text to be copied when `copy` is called. | Y
`props` | `object` | `props` to pass to the component in `render` | N
`onSuccess` | `function` | Function called after when `copy` succeeds. | N
`onError` | `function` | Function called after `copy` fails. | N
