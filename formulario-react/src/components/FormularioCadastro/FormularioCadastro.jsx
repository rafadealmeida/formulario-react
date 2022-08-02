import React, {useState}from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuarios";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  function proximaEtapa() {
    setEtapaAtual(etapaAtual+1)
  }
  function voltarEtapa() {
    setEtapaAtual(etapaAtual-1)
  }

  const formularios = [
  <DadosUsuario aoEnviar={proximaEtapa} />,
  <DadosPessoais aoEnviar={proximaEtapa} voltarEtapa={voltarEtapa} validarCPF={validarCPF}/>, 
  <DadosEntrega aoEnviar={aoEnviar} voltarEtapa={voltarEtapa}/> 
] 
  return (
    <>
    {formularios[etapaAtual]} 
      
    </>
  );
}

export default FormularioCadastro;
