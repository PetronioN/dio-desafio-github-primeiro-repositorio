import {useState} from 'react'; // Isso quer dizer que nosso componente vai utilizar memória.

function SmartCounter() {
    //retorna um vetor
    //1. variável stateful - guarda o estado daquele elemento
    //2. função amarrada a essa variável que atualiza esse valor
    const [quantity, upQuantity] = useState(1);

    return (
        <>
            <h1>{qunatity}</h1>
            <button onClick={()=> upQuantity(quantity + 1)}>Aumentar</button>
        </>
    )
}