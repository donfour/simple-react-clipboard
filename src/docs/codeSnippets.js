export const CODE_SNIPPETS = [
// Copy on Button Click
`<Clipboard
  text={"copy on button click"}
  render={({copy}) => <button onClick={copy}>Copy</button>}
/>`,
// Copy on Other Events
`<Clipboard
  text="copy on key press"
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
/>`,
// Controlled Forms
`<input value={this.state.text} onChange={ e => this.setState({text:e.target.value}) }/>
<Clipboard
  text={this.state.text}
  render={({copy}) => <button onClick={copy}>Copy</button>}
/>`,
// onSuccess and onError
`<Clipboard
  text={"onSuccess and onError"}
  render={({copy}) => <button onClick={copy}>Copy</button>}
  onSuccess={() => {alert('Copied text successfully!')}}
  onError={() => {alert('Something went horribly wrong!')}}
/>`,
// Passing Props
`<Clipboard
  text={"Passing Props"}
  props={{'text': 'New Text'}}
  render={({text, copy}) => <button onClick={copy}>{text}</button>}
/>`
]
