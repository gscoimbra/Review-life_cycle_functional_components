// Exercício 4: Relógio em Tempo Real

// Objetivo: Criar um relógio digital que atualiza a hora a cada segundo.

// Instruções:

//     Crie um componente chamado RealTimeClock.
//     Utilize useState para armazenar a hora atual.
//     Utilize useEffect para configurar um intervalo que atualiza a hora a cada segundo.
//     Certifique-se de limpar o intervalo quando o componente for desmontado para evitar vazamentos de memória.


import React, { useState, useEffect } from "react"

function RealTimeClock() {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        // Configura o intervalo para atualizar a hora a cada segundo
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return () => clearInterval(timer);
    }, []) // o array vazio garante que o efeito é executado apenas na montagem/desmontagem

    return (
        <div>
            <h1>Data Atual: {currentTime.toLocaleDateString()}</h1>
            <h1>Hora Atual: {currentTime.toLocaleTimeString()}</h1>
        </div>
    )
}

export default RealTimeClock