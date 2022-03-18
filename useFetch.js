import { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {

    const isMounted = useRef(true)
    const [state, setState] = useState({data: null, loading: true, error: null})

    useEffect( ()=>{

        return () =>{       
            isMounted.current = false;  //solo se usa como referencia
        }
    },[])


    useEffect( ()=> {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {

               if(isMounted.current){   //si isMounted es true(esta montado) llama a setState,sino NO
                   setState({
                       data,
                       loading: false,
                       error: null
                   })
               }
                    
            })
            .catch(()=>{
                setState({
                    data:null,
                    loading:false,
                    error:'no hay info para mostrar'
                })
            })


    },[url])

    return state;

}
