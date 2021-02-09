import {
    Alert
} from 'react-native'
import axios from 'axios'

//DEV
const baseURL = 'https://api.nytimes.com/svc/topstories/v2/'

var api = axios.create({
    baseURL,
    timeout: 20000,
    headers: {
        'Cache-Control': 'no-cache',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "OPTIONS,Accept,Authorization, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Header",
    }
});

api.interceptors.request.use(function (request) {
    console.log('REQUEST => ',request)
    request.url += '?api-key=AKGW22SJzix41dVmtNVEoPAEzjO7IcRs'
    return request;
}, function (error) {
    console.log('ERROR REQUEST', error)
    return Promise.reject(error);
});

api.interceptors.response.use(function (response) {
    const { status, data } = response
   // console.log('RESPONSE => ',response)
    return response;
}, function (error) {
    //console.log('ERROR RESPONSE => ',error)
    return Promise.reject(error);
});

export default api

export const URL = baseURL

export const errorTreatment = (err) => {
    //console.log('error',err.response)
    let treatedError
    //console.log(err.response)
    if (err.response && err.response.data) {

        if(err.response.data.fault)
            treatedError = err.response.data.fault.faultstring
            
    } else if (err.response.status == 500) { 
        treatedError = 'Erro interno do servidor.'
    } 
    else if (err.response.status == 401) { 
        treatedError = 'Erro de autorização'
    }
    else {
        treatedError = 'Falha na comunicação com o servidor. Verifique sua conexão com a internet.'
    }
    Alert.alert('Atenção - ' + err.response.status, treatedError)
    return treatedError
}