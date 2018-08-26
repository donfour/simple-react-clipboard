import React from "react";
import { render } from "react-dom";
import Clipboard from "../../lib";
import "./styles.css";
import { CODE_SNIPPETS } from './codeSnippets';
/* For Syntax Highlighting of Sample Code */
import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/prism-light";
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import prism from 'react-syntax-highlighter/styles/prism/prism';

registerLanguage('jsx', jsx);

class Demo extends React.Component{
  state = {
    text: ''
  }
  render(){
    return(
      <div className='app'>

        <div className='header'>
          <span className='title'>Simple React Clipboard</span>
          <a className='link' href='#'>Github</a>
        </div>

        <div className='body'>

          <div>
            <h2>Copy on Button Click</h2>
            <p>
              The most common use case for the library.
              The component passed in the <code>render</code> prop will have <code>copy</code> function passed in as a prop.
              The <code>copy</code> function will copy the <code>text</code> prop to the clipboard.
            </p>
            <Clipboard
              text={"Copy on Button Click"}
              render={({copy}) => <button onClick={copy}>Copy</button>}
            />
            <SyntaxHighlighter language='javascript' style={prism}>{CODE_SNIPPETS[0]}</SyntaxHighlighter>
          </div>

          <div>
            <h2>Copy on Other Events</h2>
            <p>
              Simple React Clipboard allows you to trigger <code>copy</code> however you want.
              This example copies text when you focus on the input field and hit 'a'.
            </p>
            <Clipboard
              text="Copy on Other Events"
              render={({copy}) =>
                <input
                  onKeyDown={(e)=>{
                    if(e.key==='a'){
                      copy();
                      e.target.focus();
                    }
                  }}
                />
              }
            />
            <SyntaxHighlighter language='javascript' style={prism}>{CODE_SNIPPETS[1]}</SyntaxHighlighter>
          </div>

          <div>
            <h2>Controlled Forms</h2>
            <p>
              This example showcases how you can use Simple React Clipboard with controlled forms.
              Clicking on the copy button will copy the value inside the input field.
            </p>
            <input value={this.state.text} onChange={ e => this.setState({text:e.target.value}) }/>
            <Clipboard
              text={this.state.text}
              render={({copy}) => <button onClick={copy}>Copy</button>}
            />
            <SyntaxHighlighter language='javascript' style={prism}>{CODE_SNIPPETS[2]}</SyntaxHighlighter>
          </div>

          <div>
            <h2>onSuccess and onError</h2>
            <p>
              You can give feedback to your users by passing in the <code>onSuccess</code> and <code>onError</code> functions.
            </p>
            <Clipboard
              text={"onSuccess and onError"}
              render={({copy}) => <button onClick={copy}>Copy</button>}
              onSuccess={() => {alert('Copied text successfully!')}}
              onError={() => {alert('Something went horribly wrong!')}}
            />
            <SyntaxHighlighter language='javascript' style={prism}>{CODE_SNIPPETS[3]}</SyntaxHighlighter>
          </div>

          <div>
            <h2>Passing Props</h2>
            <p>
              You can pass an object to <code>props</code> and it will be passed to the component in <code>render</code>.
            </p>
            <Clipboard
              text={"Passing Props"}
              props={{'text': 'New Text'}}
              render={({text, copy}) => <button onClick={copy}>{text}</button>}
            />
            <SyntaxHighlighter language='javascript' style={prism}>{CODE_SNIPPETS[4]}</SyntaxHighlighter>
          </div>

        </div>

      </div>
    )
  }
}

render(<Demo />, document.getElementById("root"));
