import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocao, setPromocao] = useState(true);
  const [novidade, setNovidade] = useState(true);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
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
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        control={
          <Switch
            onChange={(event) => {
              setPromocao(event.target.checked);
            }}
            defaultChecked={promocao}
            name="promocao"
          />
        }
        label="Promoção"
      />
      
      <FormControlLabel
        control={
          <Switch
            onChange={(event) => {
              setNovidade(event.target.checked);
            }}
            defaultChecked={novidade}
            name="novidade"
          />
        }
        label="Novidade"
      />

      <Button variant="contained"> Cadastrar</Button>
    </form>
  );
}

export default FormularioCadastro;
