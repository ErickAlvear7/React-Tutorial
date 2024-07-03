import { useState } from "react"

export const useForm = (initForm) => {

    const [formState, setFormState] = useState(initForm)
    
     
      const onInputChange = ({target}) => {
        const {name ,value} = target
        setFormState({
            ...formState,
            [name]:value
        })
      }


  return {

    ...formState,
    formState,
    onInputChange

    }
}
