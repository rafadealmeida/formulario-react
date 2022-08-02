import { Step, Stepper, Typography,StepLabel } from "@mui/material";
import React, {useEffect, useState}from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuarios";

function FormularioCadastro({ aoEnviar, validacoes }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
  useEffect(() => {
    if(etapaAtual == formularios.length-1){
      aoEnviar(dadosColetados)

    }
  })
  
  function coletaDados(dados){
    setDados({...dadosColetados, ...dados})
    proximaEtapa()
  }

  function proximaEtapa() {
    setEtapaAtual(etapaAtual+1)
  }
  function voltarEtapa() {
    setEtapaAtual(etapaAtual-1)
  }

  const formularios = [
  <DadosUsuario aoEnviar={coletaDados} validacoes={validacoes} />,
  <DadosPessoais aoEnviar={coletaDados} voltarEtapa={voltarEtapa} validacoes={validacoes}/>, 
  <DadosEntrega aoEnviar={coletaDados} voltarEtapa={voltarEtapa} validacoes={validacoes}/>,
  <Typography>Obrigado pelo cadastro!</Typography> 
  
] 
  return (
    <>
    <Stepper activeStep={etapaAtual}>
      <Step><StepLabel>Login</StepLabel></Step>
      <Step><StepLabel>Pessoal</StepLabel></Step>
      <Step><StepLabel>Endereço</StepLabel></Step>
      <Step><StepLabel>Finalização</StepLabel></Step>
    </Stepper>
    {formularios[etapaAtual]} 
      
    </>
  );
}

export default FormularioCadastro;
