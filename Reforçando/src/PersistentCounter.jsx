import React, {useState, useEffect} from "react"

function PersistentCounter() {
    // Use o hook useState para criar uma variável de estado counter. Ao inicializar, verifique se há um valor salvo no Local Storage. Se não ouver, inice com 0. parseInt converte string em um número intero na base decimal 10
    const [counter, setCounter] = useState(() => {
        const savedCounter = localStorage.getItem("counter")
        return savedCounter ? parseInt(savedCounter, 10) : 0
    })

    useEffect(() => {
        localStorage.setItem("counter", counter);
    }, [counter]) // Executa sempre que `counter` muda e atualizamos com o novo valor

    return (
        <div>
            <h1>Contador: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
            <button onClick={() => setCounter(counter - 1)}>Decrementar</button>
        </div>
    )
}

export default PersistentCounter