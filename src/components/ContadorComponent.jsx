
export const ContadorComponent = () => {
  return (
    <>
      <h1>Contador: 0</h1>
      <div className="container mt-3">
        <button className="btn btn-success me-2" onClick={ () => incrementar()}>+1</button>
        <button className="btn btn-outline-danger me-2" onClick={ () => resetear()}>Reset</button>
        <button className="btn btn-primary" onClick={ () => decrementar()}>-1</button>
      </div>
    </>
  )
}
