import { useCounter } from "../hooks/useCounter"

export const ContadorComponent = () => {

    const { count, increment, decrement, reset } = useCounter(0)


  return (
    <>
        <h1 className="mb-2">Contador:{count}</h1>
        <hr/>
        <button className="btn btn-success me-2" onClick={() => increment(1)}>+1</button>
        <button className="btn btn-outline-danger me-2" onClick={() => reset()}>Reset</button>
        <button className="btn btn-primary" onClick={() => decrement(1)}>-1</button>
      
    </>
  )
}
