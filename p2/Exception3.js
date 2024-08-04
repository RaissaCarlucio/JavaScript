function processName(nome, callback){
    if(typeof nome !== 'string'){
        callback(new Error("O nome deve ser uma String")); // Fazendo varias exceptions
        return;
    }
    if (nome.length === 0){
        callback(new Error("O nome nao pode estar vazio"));
        return;
    }
    callback(null, "Nome processado com sucesso!")
}

processName(1,(error,result) => {
    if(error){
        console.log("Ocorreu um problema: " + error.message)
    }else{
        console.log(result);
    }
})