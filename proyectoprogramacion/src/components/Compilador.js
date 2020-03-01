import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom'
import SyntaxHighlighter from 'react-syntax-highlighter';
import {agate as estiloCodigo} from 'react-syntax-highlighter/dist/esm/styles/hljs';
var refractor = require('refractor');

class Compilador extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const x = (<SyntaxHighlighter language={this.props.lenguaje} style={estiloCodigo} customStyle={{padding:"15px",borderRadius:".25rem",marginTop:"25px",marginBottom:"25px"}} >
              asd
            </SyntaxHighlighter>);
    return (
      <form>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Escriba su código</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="15">
            {x}
          </textarea>


        </div>
      </form>
    );
  }
}

export default Compilador;