# Flexible React Clipboard

A simple and flexible React utility component for copying texts to the clipboard.

## Getting Started

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

Sample code and demo can be found here.

## Props

render: PropTypes.func.isRequired
text: PropTypes.string.isRequired
props: PropTypes.object
onSuccess: PropTypes.func
onError: PropTypes.func
