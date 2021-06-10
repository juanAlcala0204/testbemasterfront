import { ENDPOINT, REQUEST_CONFIG } from '../../utils/constans/config_request'

class ClassService {
    async getClasses(idCareer) {
        try {
            const request = await fetch(`${ENDPOINT}/getAllClasses/TABLE/${idCareer}`, REQUEST_CONFIG.get);
            const listCareers = await request.json();
            console.log(listCareers);
            return listCareers;
        } catch (error) {
            console.log("Hubo un error" + error);
        }

    }
}

export default ClassService;