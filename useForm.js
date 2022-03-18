import { useState } from "react"

export const useForm = (initialState = {}) => {
  
    const [valuesForm, setValuesForm] = useState(initialState)


    const reset = () => {
        setValuesForm(initialState)
    }

    const  handleInputChange = ({target}) => {

        setValuesForm({
            ...valuesForm,
            [ target.name ]: target.value
        })
        
    }

    return [valuesForm, handleInputChange, reset]
}
