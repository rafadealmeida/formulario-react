import "./App.css";
import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@mui/material";
import { validarCPF, validarSenha } from "./models/cadastro";

import ValidacoesCadastro from '../src/context/ValidacoesCadastro'

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

class App extends Component {
  render() {
    return (
      <Container maxWidth="sm" component="article">
        <div className="App">
          <Typography variant="h" component="h1">
            Formulário
          </Typography>
          <ValidacoesCadastro.Provider value={{cpf:validarCPF, senha:validarSenha}}>
          <FormularioCadastro aoEnviar = {aoEnviarForm}  />

          </ValidacoesCadastro.Provider>
        </div>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}



export default App;
