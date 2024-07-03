import { useForm } from "../hooks/useForm"


export const FormularioComponent = () => {

  const onForm = {
    inputUsername: '',
    inputEmail: '',
    inputPassword: ''
  }

  const {inputUsername, inputEmail, inputPassword, formState, onInputChange} = useForm(onForm)

  const onSubmit = (e) => {
     e.preventDefault()
     console.log(formState)
  }

  return (

    <form className="row g-3" onSubmit={onSubmit}>
        <div className="col-12">
            <label htmlFor="inputUsername" className="form-label">Username</label>
            <input type="text" className="form-control" name="inputUsername" placeholder="enter your name" defaultValue={inputUsername}
              onChange={onInputChange}
            />
        </div>
        <div className="col-md-6">
            <label htmlFor="inputEmail" className="form-label">Email</label>
            <input type="email" className="form-control" name="inputEmail" placeholder="enter your email" defaultValue={inputEmail} onChange={onInputChange} />
        </div>
        <div className="col-md-6">
            <label htmlFor="inputPassword" className="form-label">Password</label>
            <input type="password" className="form-control" name="inputPassword" defaultValue={inputPassword} onChange={onInputChange}/>
        </div>
        <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
    </form>
  
  )
}
