import React, {useState} from "react";
import './App.scss';
import {Preview} from './Preview.js'

const initialState= '# H1 Element - Hello\r\n' +
  '## H2 Element - My name is Hieu\r\n' +
  '[This is my github portfolio](https://github.com/HieuNT-2306)\r\n\r\n' +
  '`ReactDOM.render(<App />, document.getElementById("root")) //this call rendered my React app`\r\n' +
  '```javascript\r\n' +
  'function thankYouForUsingThisApp() { return true; }\r\n' +
  '```\r\n'+
  '1. This is a list item\r\n' +
  '1. This is still a list item\r\n' +
  '>How do you rate this?\r\n' +
  '![alt-text](https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/168px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg)\r\n' +
  '**This is my favorite animal**';

function App() {  
  const [text, setText] = useState(initialState);
  function handleChange(e) {
      setText(e.target.value)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="title">Markdown Previewer</h1>
        <div className="flexText">
          <div>
            <h2>Your text</h2>
            <textarea id="editor" value={text} onChange={(e)=>handleChange(e)}></textarea>
          </div>
          <div>
            <h2>Your markdown</h2>
            <Preview markdown={text}/> 
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
