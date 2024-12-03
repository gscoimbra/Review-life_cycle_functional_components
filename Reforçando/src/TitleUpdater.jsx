// Exercício 1: Atualização de Título com useEffect

// Objetivo: Atualizar o título da aba do navegador conforme o usuário interage com o componente.

// Instruções:

//     Crie um componente chamado TitleUpdater.
//     Use useState para criar uma variável de estado number.
//     Use useEffect para atualizar o título da aba do navegador toda vez que number mudar.
//     Adicione botões para incrementar e decrementar number.

import React, { useState, useEffect} from "react";

function TitleUpdater() {
    const [number, setNumber] = useState(0);

    // useEffect é para monitorar as mudanças na variável number e atualizar o título da aba do navegador usando o método document.title
    useEffect(() => {
        // Atualiza o título da aba
        document.title = `Número: ${number}`
    }, [number]) // Roda toda vez que `number` muda

    return (
        <div>
            <h1>Valor atual: {number}</h1>
            <button onClick={() => setNumber(number + 1)}>Incrementar</button>
            <button onClick={() => setNumber(number - 1)}>Decrementar</button>
        </div>
    )
}

export default TitleUpdater;