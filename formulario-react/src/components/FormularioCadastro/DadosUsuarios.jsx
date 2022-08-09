import { TextField, Button } from "@mui/material";
import React, { useState, useContext }from "react";
import ValidacoesCadastro from "../../context/ValidacoesCadastro";

import useErros from "../../hooks/useErros";

function DadosUsuario({ aoEnviar}) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if(possoEnviar()){
          aoEnviar({email, senha});

        }
      }}
    >
      <TextField onChange={(event) => {
        setEmail(event.target.value)
      }}
        value = {email}
        id="email"
        label="Email"
        type="email"
        required
        margin="normal"
        fullWidth
      />
      <TextField onChange={(event) => {
        setSenha(event.target.value)
      }}
        onBlur={validarCampos}
        name="senha"
        value={senha}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="password"
        label="Senha"
        type="password"
        required
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
