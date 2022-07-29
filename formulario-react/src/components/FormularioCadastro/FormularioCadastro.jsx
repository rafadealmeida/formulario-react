import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';



const label = "Promoção"

function FormularioCadastro() {
  return (
    <form className="formulario">

    <TextField id="nome" label="Nome" variant="outlined" fullWidth />
    <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth/>
    <TextField id="cpf" label="CPF" variant="outlined" fullWidth/>
     
    <Switch {...label} defaultChecked/> 
      <Button variant="contained"> Cadastrar</Button>

    </form>
  );
}

export default FormularioCadastro;
