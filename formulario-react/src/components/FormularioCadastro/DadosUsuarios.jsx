import { TextField, Button } from "@mui/material";
import React, { useState }from "react";

function DadosUsuario({ aoEnviar, validacoes }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState({senha:{valido: true, texto:""}});
  
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
        error={!error.senha.valido}
        helperText={error.senha.texto}
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
