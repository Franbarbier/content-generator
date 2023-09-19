import {CREATE_CONTENT} from '../constants/actionTypes';
import * as api from '../api';

// export const getContents = (filtros=null) => async (dispatch) => {
//     try{
//         const{data} = await api.getContents(filtros)
//         dispatch({type: FETCH_ALL_FAQS, payload:data})
//         console.log(data)
//         return data;
//     }catch(error){
//         console.log(error.message)
//     }
// }

export const createNewContent = async (content, dispatch) => {
    try{
        const{data} = await api.createContent(content)
        dispatch({type: CREATE_CONTENT, payload:data})
        console.log(data)
        return data
    }catch(error){
        console.log(error)
    }
}

// export const updateContent = async (content, dispatch) => {
//     try{
//         const {data} = await api.updateContent(content)
//         dispatch({type: UPDATE_FAQ, payload:data})
//     }catch(error){
//         console.log(error)
//     }
// }

// export const deleteContents = async (id_contents, dispatch) => {
//     try{
//         for (let index = 0; index < id_contents.length; index++) {
//             const{data} = await api.deleteContents(id_contents[index])
//             dispatch({type: DELETE_FAQS, payload:data})
//         }
//     }catch(error){
//         console.log(error)
//     }
// }
