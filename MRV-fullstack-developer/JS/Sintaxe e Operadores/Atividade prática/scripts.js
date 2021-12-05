function entrada(){
    let n1 = Number(prompt("Digite o primeiro valor:"));
    let n2 = Number(prompt("Digite o segundo valor:"));
    soma(n1, n2);

    function soma(n1, n2) {
        soma = n1 + n2;
        if (n1 == n2) {
            if (soma > 10 && soma > 20) {
                alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é maior do que 10 e maior do que 20.`);
            } else if (soma > 10 && soma == 20) {
                alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é maior do que 10 e igual a 20.`);
            } else if (soma > 10 && soma < 20) {
                alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é maior do que 10 e menor do que 20.`);
            } else if (soma == 10) {
                alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é igual a 10 e menor do que 20.`);
            } else if (soma < 10) {
                alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é menor do que 10 e menor do que 20.`)
            }
        } else if (n1 != n2) {
            if (soma > 10 && soma > 20) {
                alert(`Os números ${n1} e ${n2} são diferentes. Sua soma é ${soma}, que é maior do que 10 e maior do que 20.`);
            } else if (soma > 10 && soma == 20) {
                alert(`Os números ${n1} e ${n2} são diferentes. Sua soma é ${soma}, que é maior do que 10 e igual a 20.`);
            } else if(soma > 10 && soma < 20) {
                alert(`Os números ${n1} e ${n2} são diferentes. Sua soma é ${soma}, que é maior do que 10 e menor do que 20.`);
            } else if (soma == 10) {
                alert(`Os números ${n1} e ${n2} são diferentes. Sua soma é ${soma}, que é igual a 10 e menor do que 20.`);
            } else if (soma < 10) {
                alert(`Os números ${n1} e ${n2} são diferentes. Sua soma é ${soma}, que é menor do que 10 e menor do que 20.`)
            }
        }
    }
    var continuar = Number(prompt("Você deseja continuar?\n1) Sim\n2) Não"));
    if (continuar == 1) {
        entrada();
    } else if (continuar == 2) {
        alert("Até mais!");
    } while (continuar > 2 || continuar < 1) {
        alert("Insira um valor válido!");
        var continuar = Number(prompt("Você deseja continuar?\n1) Sim\n2) Não"));
        
        if(continuar == 1) {
            entrada();
        } else if (continuar == 2) {
            alert("Até mais!");
        }
    }
}

entrada();