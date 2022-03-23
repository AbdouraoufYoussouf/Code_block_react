import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import { CopyBlock, dracula,hybrid } from "react-code-blocks";
import "./styles.css";


const App = () => {
const input = '# [this] is a header \n\n And this a paragraphe'
  const markdown = `
  # Header 1
  ## Header 2

  _ italic _

  ** bold **

  <b> bold Html </b>
  `;
  const jsxx = `class HelloMessage extends React.Component {
    handlePress = () => {
      alert('Hello')
    }
    render() {
      return (
        <div>
          <p>Hello {this.props.name}</p>
          <button onClick={this.handlePress}>Say Hello</button>
        </div>
      );
    }
  }
  ReactDOM.render(
    <HelloMessage name="Taylor" />, 
    mountNode 
  );`
  return (
    <div className="App">
      <h1>Marckodwon</h1>
      <div className="demo">
        
        <CopyBlock
          language="html"
          text={jsxx}
          codeBlock
          theme={hybrid}
          showLineNumbers={true}
        />
      </div>

      <ReactMarkdown source={input} />

    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
