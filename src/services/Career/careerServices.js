import { ENDPOINT, REQUEST_CONFIG } from '../../utils/constans/config_request'

class Career {
    async getCareers() {
        try {
            const request = await fetch(`${ENDPOINT}/getAllCareers/TABLE`, REQUEST_CONFIG.get);
            const listCareers = await request.json();
            console.log(listCareers);
            return listCareers;
        } catch (error) {
            console.log("Hubo un error" + error);
        }

    }

    async registerCareer(data) {
        try {
            const request = await fetch(`${ENDPOINT}/registerCareer/`, REQUEST_CONFIG.post(data));
            const responseRequest = await request.json();
            console.log(responseRequest);
            return responseRequest;
        } catch (error) {
            console.log("Hubo un error" + error);
        }

    }

    async updateCareer(data) {
        try {
            const request = await fetch(`${ENDPOINT}/updateCareer/`, REQUEST_CONFIG.put(data));
            const responseRequest = await request.json();
            console.log(responseRequest);
            return responseRequest;
        } catch (error) {
            console.log("Hubo un error" + error);
        }

    }
}

export default Career;