import React, { useState, useEffect } from "react";

function WindowSize() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        // Função que atualiza o estado com a largura atual
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener("resize", handleResize)

        // Remove o event listener ao desmontar o componente
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, []) // O array vazio [] garante que o efeito é executado apenas na montagem/desmontagem

    return (
        <div>
            <h1>Largura da janela: {windowWidth}px</h1>
        </div>
    )
}

export default WindowSize;