import { useState } from "react"

export const useCounter = (initial = 0) => {

   const [count, setContador] = useState(initial)

    const increment = (value) => {
        setContador(contador + value)
    }

    const decrement = (value) => {
        setContador(contador - value)
    }

    const reset = () => {
        setContador(0)
    }


  return (
    count,
    increment,
    decrement,
    reset

  )
}
