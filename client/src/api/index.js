import axios from 'axios';
import { ENDPOINT } from '../global';

// // Obtenemos el token del localStorage
// const token = window.localStorage.getItem('token');

const headers = {
//     'Authorization': `Bearer ${token}`
}
// const headers = '';

const url_content = ENDPOINT+'content';
export const createContent = (cont) => axios.post(url_content, cont, {headers});
// export const getConetcreateContents = (filtros) => axios.get(url_content, {...filtros, headers});
// export const deleteConetcreateContents = (id) => axios.delete(`${url_content}/${id}`, {headers});
// export const updateConetcreateContent = (faq) => axios.patch(`${url_content}/`, faq, {headers});


// export const verifyUser = async (id) => {

//     var res = await fetch(`${url_users}/verify`, {method: 'GET', headers})
//     .then(response => response.json())
//     .then(data => data);

//     return res
// }
