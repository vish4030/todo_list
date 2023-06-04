import { DELETE_TODODATA_VALUE, EDIT_TODODATA_VALUE, UPDATE_TODODATA_VALUE } from "../constants"


export const todoEdit = (data) => {
    return {
        type: EDIT_TODODATA_VALUE,
        data: data
    }
};

export const todoUpdate = (obj) =>
{
    return {
        type: UPDATE_TODODATA_VALUE,
        data:{data:obj.data, index:obj.index}  
    }
}

export const todoDelete = (id) =>{
    return {
        type: DELETE_TODODATA_VALUE,
        id
    }
}