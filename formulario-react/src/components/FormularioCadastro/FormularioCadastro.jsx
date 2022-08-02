import React, {useEffect, useState}from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuarios";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
  useEffect(() => {
    if(etapaAtual == formularios.length){
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
  <DadosUsuario aoEnviar={coletaDados} />,
  <DadosPessoais aoEnviar={coletaDados} voltarEtapa={voltarEtapa} validarCPF={validarCPF}/>, 
  <DadosEntrega aoEnviar={coletaDados} voltarEtapa={voltarEtapa}/> 
] 
  return (
    <>
    {formularios[etapaAtual]} 
      
    </>
  );
}

export default FormularioCadastro;
