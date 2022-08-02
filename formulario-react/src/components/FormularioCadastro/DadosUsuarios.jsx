import { TextField, Button } from "@mui/material";
import React, { useState }from "react";

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({email, senha});
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
        value={senha}
        id="password"
        label="Senha"
        type="password"
        required
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
