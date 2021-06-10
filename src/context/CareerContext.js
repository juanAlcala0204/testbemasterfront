/** Import General Dependecies */
import { createContext } from 'react'

/** Import Custom Hook */
import useCareer from '../hooks/useCareer';

const CareerContext = createContext();

/**
 * Build Provider of the Career
 * @param {*} children Argument that have the components into of the this context
 */
const CareerProvider = ({children}) => {

    const { career, getCareers, register, selectCareer,careerSelected, updateCareer } = useCareer([]);
    
    return (
        <CareerContext.Provider value={{career, getCareers, register, selectCareer, careerSelected, updateCareer}}>
            { children }
        </CareerContext.Provider>
    ) 
}

/** Exports */
export { CareerProvider }
export default CareerContext;