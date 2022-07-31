import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@mui/material";

function FormularioCadastro({aoEnviar, validarCPF}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocao, setPromocao] = useState(true);
  const [novidade, setNovidade] = useState(true);
  const [error, setError] = useState({cpf:{valido: true, texto:""}});

  return (
    <form
      onSubmit={(event) => {
          event.preventDefault();
          aoEnviar({nome,sobrenome,cpf,promocao,novidade})
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

        onBlur={(event) => {
            const ehValido = validarCPF(cpf)
            setError({cpf: ehValido});
        }}

        error={!error.cpf.valido}
        helperText={error.cpf.texto}
        id="cpf"
        label="CPF"
        variant="outlined"
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

      <Button type="submit" variant="contained"> Cadastrar</Button>
    </form>
  );
}

export default FormularioCadastro;
