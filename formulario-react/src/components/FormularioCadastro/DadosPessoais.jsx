import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";

function DadosPessoais({aoEnviar, validacoes, voltarEtapa}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocao, setPromocao] = useState(true);
  const [novidade, setNovidade] = useState(true);
  const [error, setError] = useState({cpf:{valido: true, texto:""}});

  function validarCampos(event) {
      const {name,value}= event.target
      const novoEstado = {... error} 
      novoEstado[name] = validacoes[name](value)
      setError(novoEstado);
  }

  function possoEnviar(){
    for(let campo in error){
      if(!error[campo].valido){
        return false
      }
      return true;
    }
  }



  return (
    <form
      onSubmit={(event) => {
          event.preventDefault();

          if(possoEnviar()){          
           aoEnviar({nome,sobrenome,cpf,promocao,novidade})
          }
      }}
      className="formulario"
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        required
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        required
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}

        onBlur={validarCampos}

        error={!error.cpf.valido}
        helperText={error.cpf.texto}
        id="cpf"
        label="CPF"
        name="cpf"
        variant="outlined"
        required
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        control={
          <Switch
          checked={promocao}
            onChange={(event) => {
              setPromocao(event.target.checked);
            }}
            name="promocao"
          />
        }
        label="Promoção"
      />
      
      <FormControlLabel
        control={
          <Switch
          checked={novidade}
            onChange={(event) => {
              setNovidade(event.target.checked);
            }}
            name="novidade"
          />
        }
        label="Novidade"
      />

      <Button type="button" variant="contained" onClick={() => {voltarEtapa()}}> Voltar etapa</Button>
      <Button type="submit" variant="contained"> Próximo </Button>
    </form>
  );
}

export default DadosPessoais;
