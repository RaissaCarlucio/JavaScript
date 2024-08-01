function criarFuncionario(nome, sobrenome, a, p){
    return {
        nome,
        sobrenome,
        altura: a,
        peso: p,
        calculoImc(){
            const imc = this.peso/(this.altura ** 2).toFixed(1)
            if(imc <= 18,5 && imc >= 0){
                console.log("Abaixo do peso")
            }else if(imc >= 18,5 && imc <= 24,9){
                console.log("Peso normal")
            }else if(imc >= 25 && imc <= 29,9){
                console.log("Acima do peso(sobrepeso")
            }else if(imc >= 30 && imc <= 34,9){
                console.log("Obesidade I")
            }else if(imc >= 35 && imc <= 39,9){
                console.log("Obesidade II")
            }else if(imc >= 40){
                console.log("Obesidade III")
            }
        }
    }


}
 
const p1 = criarFuncionario("Marcelo", "Estruc", 1.75, 78)
p1.calculoImc();