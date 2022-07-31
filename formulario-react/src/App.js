import "./App.css";
import React, { Component } from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

import { Container, Typography } from "@mui/material";
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
          <FormularioCadastro aoEnviar = {aoEnviarForm} validarCPF = {validarCPF} />
        </div>
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"CPF deve ter 11 dígitos"} 
  }else{
    return {valido:true, text:""}
    
  }
}

export default App;
