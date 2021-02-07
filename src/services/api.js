import {
    Alert
} from 'react-native'
import axios from 'axios'

//DEV
const baseURL = ''

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
    return request;
}, function (error) {
    console.log('ERROR REQUEST', error)
    return Promise.reject(error);
});

api.interceptors.response.use(function (response) {
    const { status, data } = response
    console.log('RESPONSE => ',response)
    return response;
}, function (error) {
    console.log('ERROR RESPONSE => ',error)
    return Promise.reject(error);
});

export default api

export const URL = baseURL

export const errorTreatment = (err) => {
    //console.log('error',err.response.data)
    let treatedError
    console.log(err.response)
    if (err.response && err.response.data && (err.response.data.payload || err.response.data.mensagem || err.response.data.message)) {
        
        if(err.response.data.mensagem || err.response.data.message )
            treatedError = err.response.data.mensagem || err.response.data.message
        else  
            treatedError = err.response.data.payload
            
    } else if (err.status == 500) { 
        treatedError = 'Erro interno do servidor.'
    } else {
        treatedError = 'Falha na comunicação com o servidor. Verifique sua conexão com a internet.'
    }
    Alert.alert('Atenção', treatedError)
    return treatedError
}