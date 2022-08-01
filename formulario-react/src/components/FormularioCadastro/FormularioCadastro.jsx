import React, {useState}from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuarios";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  function formularioAtual(etapa){
    switch (etapa){
      case 0:
        return <DadosUsuario/>
      case 1:
        return <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
      case 2:
        return <DadosEntrega/>
    }
  }
  
  return (
    <>
    {formularioAtual(etapaAtual)}  
      
    </>
  );
}

export default FormularioCadastro;
