// Exercício 6: Contador com Limite

// Objetivo: Criar um contador que não ultrapasse um limite superior e que avise quando atingido.

// Instruções:

//     Crie um componente chamado LimitedCounter.
//     Use useState para armazenar o valor do contador.
//     Adicione botões para incrementar e decrementar o contador.
//     Não permita que o contador ultrapasse o valor 10 e exiba uma mensagem quando o limite for atingido.

import React, { useState } from "react";

function LimitedCounter() {
    // Estado para armazenar o valor do contador
    const [counter, setCounter] = useState(0);

    const increment = () => {
        if (counter < 10) {
            setCounter(counter + 1)
        }
    }

    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }

    return (
        <div>
            <h1>Contador: {counter}</h1>
            <button onClick={decrement} disabled={counter == 0}>
                Decrementar
            </button>
            <button onClick={increment} disable={counter == 10}>
                Incrementar
            </button>
            {counter == 10 && <p style={{color: "red"}}>Limite máximo atingido!</p>}
        </div>
    )
}

export default LimitedCounter