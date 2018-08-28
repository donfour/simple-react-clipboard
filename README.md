# Simple React Clipboard

A simple and flexible React utility component for copying texts to the clipboard. [Demo and sample code here](https://donfour.github.io/simple-react-clipboard).

## Why This?

Existing React clipboard libraries are restrictive (e.g. you can only trigger copy on click / you must render a button or a span).
Simple React Clipboard allows you to trigger `copy` whenever and however you want, with whatever component that fits your use case.

## Getting Started
```
npm i simple-react-clipboard
```

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

## Props

Name | Type | Description | Required
--- | --- | --- | ---
`render` | `function` | A function that returns a React element. | Y
`text` | `string` | The text to be copied when `copy` is called. | Y
`props` | `object` | `props` to pass to the component in `render` | N
`onSuccess` | `function` | Function called when `copy` succeeds. | N
`onError` | `function` | Function called when `copy` fails. | N

## To Run this Repository

1. `git clone https://github.com/donfour/simple-react-clipboard.git`
3. `npm install`
4. `npm run dev`

## To Test this Repository

```
npm run test
```

## Credits

This package is based on the awesome [clipboard.js](https://github.com/zenorocha/clipboard.js).
