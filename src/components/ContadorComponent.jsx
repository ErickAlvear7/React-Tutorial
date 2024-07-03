import { useCounter } from "../hooks/useCounter"

export const ContadorComponent = () => {

    const { count, increment, decrement, reset } = useCounter(100)


  return (
    <>
        <h1>Contador: {count}</h1>
        <hr/>
        <button onClick={() => increment(1)} className="btn btn-success me-2">+1</button>
        <button className="btn btn-outline-danger me-2" onClick={() => reset()}>Reset</button>
        <button className="btn btn-primary" onClick={() => decrement(1)}>-1</button>
      
    </>
  )
}
