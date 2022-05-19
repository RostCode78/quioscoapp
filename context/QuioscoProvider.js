import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const QuioscoContext = createContext();

const QuioscoProvider = ({ children }) => {

    const [ categorias, setCategorias ] = useState([]);

    const ObtenerCategorias = async () => {
        const { data } = await axios('/api/categorias');
        setCategorias(data);
    }

    useEffect( () => {
        ObtenerCategorias();
    }, []);

    return ( 
        <QuioscoContext.Provider 
            value={{

            }}
        >
            { children } 
        </QuioscoContext.Provider>
    )

}

export {
    QuioscoProvider
}

export default QuioscoContext;