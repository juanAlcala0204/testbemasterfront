
/** Import General Dependencies */
import { useState } from 'react'

import Career from '../services/Career/careerServices'

/**
 * Build the Custom Hook that have the Logic of the Career and Principal States
 * @param {array} initialCareer Argument that have the base of the career list
 */
export default function useCareer (initialCareer) {
    const [career, setCareer] = useState(initialCareer);
    const service = new Career();

    const [careerSelected, setCareerSelected] = useState({
        nameCareer: '',
        descriptionCareer: '',
    });

    const getCareers = async () => {
        const careers = await service.getCareers();
        setCareer(careers);
    }

    const register = async (data) => {
        const careers = await service.registerCareer(data);
        // setCareer(careers);
    }

    const selectCareer = (newCareer) => {
        const newData = {
            idCareer: newCareer.idCarrera,
            nameCareer: newCareer.nombre_carrera,
            descriptionCareer: newCareer.descripcion_carrera
        }

        setCareerSelected({
            ...newData
        })
    }

    const updateCareer = async (updateCareer) => {
        const careers = await service.updateCareer(updateCareer);
    }

    return {
        career,
        getCareers,
        register,
        selectCareer,
        careerSelected,
        updateCareer
    }

}
