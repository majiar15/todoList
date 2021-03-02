import { useEffect, useRef, useState } from "react"


export const useFetch = (url) => {

    const isMounted = useRef(true);
      const [state, setState] = useState({data: null, loading: true, error: null})

      useEffect(() => {
          return () => {
            isMounted.current = false;
          }
      }, [])
      useEffect(() => {
        setState({
            loading:true,
            error:null,
            data:null
        });
        
        fetch(url)
        .then(repsonse => repsonse.json())
        .then(data =>{


            if(isMounted.current){
                setState({
                    loading:false,
                    error: false,
                    data
                });
            }
                
            
            // console.log(data)
        });
      }, [url]);
      return state;

}
