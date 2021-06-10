
/** Import Global Dependencies */
import { useContext } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { useForm } from 'react-hook-form'

/** Import Global Context */
import ModalContext from '../../context/ModalContext';
import CareerContext from '../../context/CareerContext';

/**
 * Build Component Modal Register Geometric Figure
 */
export default function ModalRegister() {
    const { stateModal, closeModal } = useContext(ModalContext);
    const { register: registerCareer, getCareers } = useContext(CareerContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    /**
     * Function that have the action of the register Figure
     * @param {object} data Argument that give the info of the new Figure 
     */
    const onSubmit = async data => {
        console.log(data);
        let responseRegister = await registerCareer(data)
        let getResponse = await getCareers();
        closeModal();
    }

    return (
        <Modal isOpen={stateModal.typeModal === 'registerCareer' ? stateModal.open : false} size="lg">
            <ModalHeader>
                Registrar Carrera.
            </ModalHeader>
            <ModalBody >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                    <label htmlFor="nameCareer">Titulo</label>
                                    <input type="text" className="form-control" placeholder="Escriba el título de la publicación." id="nameCareer" name="nameCareer" {...register('nameCareer', { required: true })} />
                                    {errors.nameCareer && <span className='errorField'>Este campo es requerido</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="descriptionCareer">Descripción</label>
                                    <input type="text" className="form-control" placeholder="Escriba la descripción de la publicación." id="descriptionCareer" name="descriptionCareer" {...register('descriptionCareer', { required: true })} />
                                    {errors.descriptionCareer && <span className='errorField'>Este campo es requerido</span>}
                                </div>
                                <hr />
                                <button type="submit" className="btn btn-success">Guardar Carrera</button>
                                <button  className="btn btn-danger" style={{marginLeft:15}} onClick={() => {closeModal()}}>Cerrar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    );
}