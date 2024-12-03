// Exercício 5: Exibir/Mostrar Texto

// Objetivo: Criar um componente que alterna entre exibir e esconder um texto com o clique de um botão.

// Instruções:

//     Crie um componente chamado ToggleText.
//     Use useState para gerenciar se o texto está visível ou não.
//     Adicione um botão que alterne o estado de visibilidade do texto.
//     Exiba o texto somente quando estiver visível.

import React, {useState} from "react"

function ToggleText() {
    // Estado para controlar a visibilidade do texto
    const [isVisible, setIsVisible] = useState(false) // Ou seja, o texto começa escondido

    // Função para alternar a visibilidade
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    // O texto só é exibido quando isVisible é true
    return (
        <div>
            <button onClick={toggleVisibility}>
                {isVisible ? "Esconder Texto" : "Mostrar Texto"}
            </button>
            {isVisible && <p>Este é o texto que pode ser exibido ou escondido.</p>}
        </div>
    )
}

export default ToggleText