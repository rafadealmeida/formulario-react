import "./App.css";
import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

import { Container } from '@mui/material';

class App extends Component {
  render() {
    return (
      <Container maxWidth ="sm" component = "article">
        <div className="App">
          <h1 className="formulario__titulo">Formulário</h1>
          <FormularioCadastro />
        </div>
      </Container>
    );
  }
}

export default App;
