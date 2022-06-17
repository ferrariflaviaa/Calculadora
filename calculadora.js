function calculadora() {
    const operacao = Number(prompt('Escolha uma opção \n 1: Somar \n 2: Subtrair \n 3: Mutilplicação \n 4: Divisão'));

    if (operacao < 5 && operacao > 0) {
        let n1 = Number(prompt('Digite um número'));
        let n2 = Number(prompt('Digite um número'));

        if (!n1 || !n2) {
            alert("Dados invalidos");
            calculadora();
        }

        function soma() {
            let resul = n1 + n2;
            alert(`Resultado é ${resul}`);
            novaoperacao();
        }
        function subtrair() {
            let resul = n1 - n2;
            alert(`Resultado é ${resul}`);
            novaoperacao();
        }
        function mutilplicação() {
            let resul = n1 * n2;
            alert(`Resultado é ${resul}`);
            novaoperacao();
        }
        function divisao() {
            let resul = n1 / n2;
            alert(`Resultado é ${resul}`);
            novaoperacao();
        }

        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtrair();
                break;
            case 3:
                mutilplicação();
                break;
            case 4:
                divisao();
                break;

        }
    } else {
        alert("Número invalido !!");
        calculadora();
    }

    function novaoperacao(){
        const opcao = Number(prompt("Deseja fazer outra operação? \n1: Sim \n2: Não"));
    
        switch (opcao){
            case 1:
                calculadora();
                break;
            case 2:
                alert("Até mais");
                break;
            default:
                alert("Dados invalidos");
                novaoperacao();
                break;
        }
    }

}
calculadora();