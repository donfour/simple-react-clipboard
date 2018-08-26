import React from "react";
import { render } from "react-dom";
import Clipboard from "../../lib";
import "./styles.css";

const Button = ({copy}) => <button onClick={copy}>Copy</button>;

function Demo() {
  return (
    <div>
    
      <h1>Copy on button click</h1>

      <Clipboard
        text={"Copy on button click"}
        render={Button}
        onSuccess={()=>console.log('succeeded')}
      />

    </div>
  );
}

render(<Demo />, document.getElementById("app"));
