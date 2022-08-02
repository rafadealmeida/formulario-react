import React, { useState } from "react";
import { TextField, Button, Grid, Box, Paper, } from "@mui/material";
import { styled } from '@mui/material/styles';

function DadosEntrega({ voltarEtapa, aoEnviar }) {
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
  }));
  

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        onChange={(event) => {
          setCep(event.target.value);
        }}
        value={cep}
        id="cep"
        label="CEP"
        type="number"
        margin="normal"
      />
      <TextField
        onChange={(event) => {
          setEndereco(event.target.value);
        }}
        value={endereco}
        id="endereco"
        label="Endereço"
        type="text"
        margin="normal"
        fullWidth
      />
      <TextField
        onChange={(event) => {
          setNumero(event.target.value);
        }}
        value={numero}
        id="numero"
        label="Número de contato"
        type="number"
        margin="normal"
      />
      <TextField
        onChange={(event) => {
          setEstado(event.target.value);
        }}
        value={estado}
        id="estado"
        label="Estado"
        type="text"
        margin="normal"
      />
      <TextField
        onChange={(event) => {
          setCidade(event.target.value);
        }}
        value={cidade}
        id="cidade"
        label="Cidade"
        type="text"
        margin="normal"
      />
     
     

      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Item> <Button
        type="button"
        variant="contained"
        fullWidth
        margin="normal"
        onClick={() => {
          voltarEtapa();
        }}
      >
        {" "}
        Voltar etapa
      </Button></Item>
        </Grid>
        <Grid item xs={5}>
          <Item> <Button type="submit" variant="contained" fullWidth margin="normal">
        Finalizar Cadastro
      </Button></Item>
        </Grid>
        
      </Grid>
    </Box>
     
    </form>
  );
}

export default DadosEntrega;
