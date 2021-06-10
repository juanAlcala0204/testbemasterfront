/** Import Global Dependencies */
import { useContext, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { useForm } from 'react-hook-form'

/** Import Global Context */
import ModalContext from '../../context/ModalContext';
import CareerContext from '../../context/CareerContext';

/**
 * Buid the component Modal Edit Figure
 */
export default function ModalEdit() {
    const { stateModal, closeModal } = useContext(ModalContext);
    const { updateCareer, careerSelected, getCareers } = useContext(CareerContext);
    const { register, handleSubmit, setValue, reset } = useForm({
        defaultValues: careerSelected
    });

    setValue('nameCareer', careerSelected.nameCareer);
    setValue('descriptionCareer', careerSelected.descriptionCareer);

    useEffect(() => {
        reset(careerSelected);
    }, [careerSelected, reset]);

    const onSubmit = async data => {
        let dataUpdate = {};
        dataUpdate.data = {
            nameCareer: data.nameCareer,
            descriptionCareer: data.descriptionCareer
        };
        dataUpdate.idCareer = careerSelected.idCareer;
        console.log('data, to send',dataUpdate);
        console.log('carrerselected',careerSelected);
        let responseUpdate = await updateCareer(dataUpdate);
        let getResponse = await getCareers();
        closeModal();
    }

    return (
        <Modal isOpen={stateModal.typeModal === 'editCareer' ? stateModal.open : false} size="lg">
            <ModalHeader>
                Editar Carrera.
            </ModalHeader>
            <ModalBody >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                    <label htmlFor="nameCareer">Titulo</label>
                                    <input type="text" className="form-control" placeholder="Escriba el título de la publicación." id="nameCareer" name="nameCareer" {...register('nameCareer')} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="descriptionCareer">Descripción</label>
                                    <input type="text" className="form-control" placeholder="Escriba la descripción de la publicación." id="descriptionCareer" name="descriptionCareer" {...register('descriptionCareer')} />
                                </div>
                                <hr />
                                <button type="submit" className="btn btn-success">Guardar Figura</button>
                                <button  className="btn btn-danger" style={{marginLeft:15}} onClick={() => {closeModal()}}>Cerrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    );
}