import React, { useState }from "react";
import {TextField, Button} from "@mui/material"

function DadosEntrega({voltarEtapa, aoEnviar}) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] =  useState("");
  const [numero, setNumero] = useState("") 
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  
  
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar();
    }}
    >
      <TextField onChange={(event) => {
        setCidade(event.target.value)
      }}
        value={cep}
        id="cep"
        label="CEP"
        type="number"
        margin="normal"
      />
        <TextField onChange={(event) => {
          setEndereco(event.target.value)
        }}
        value={endereco}
        id="endereco"
        label="Endereço"
        type="text"
        margin="normal"
        fullWidth
      />
        <TextField onChange={(event) => {
          setNumero(event.target.value)
        }}
        value={numero}
        id="numero"
        label="Número de contato"
        type="number"
        margin="normal"
      />
      <TextField onChange={(event) => {
        setEstado(event.target.value)
      }}
      value={estado}
        id="estado"
        label="Estado"
        type="text"
        margin="normal"
      />
      <TextField onChange={(event) => {
        setCidade(event.target.value)
      }}
      value={cidade}
        id="cidade"
        label="Cidade"
        type="text"
        margin="normal"
      />
       <Button type="button" variant="contained" onClick={() => {
        voltarEtapa()
      }}> Voltar etapa</Button>
       <Button type="submit" variant="contained" fullWidth>
        Finalizar Cadastro
      </Button>
     
    </form>
  );
}

export default DadosEntrega;
