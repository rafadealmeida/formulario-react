function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido:false, texto:"CPF deve ter 11 dígitos"} 
    }else{
      return {valido:true, text:""}
      
    }
  }

  function validarSenha(senha){
    if(senha.length < 4 || senha.length >16){
      return {valido:false, texto:"A senha deve ter entre 4 a 16 dígitos"} 
    }else{
      return {valido:true, text:""}
      
    }
  }


export {validarSenha, validarCPF}