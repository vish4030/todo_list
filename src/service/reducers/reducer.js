
import { UPDATE_TODODATA_VALUE, EDIT_TODODATA_VALUE, DELETE_TODODATA_VALUE } from "../constants";
const initialState = {
    todoData: []
}

export default function todoStore(state = initialState, action) {
    switch (action.type) {
        case EDIT_TODODATA_VALUE:
            const copyData = state.todoData;
            copyData.push(action.data)
            return {
                ...state,
                todoData: copyData
            }
        case UPDATE_TODODATA_VALUE:
            const copyData1 = state.todoData;
            copyData1[action.data.index] = action.data.data;
            return {
                ...state,
                todoData: copyData1

            }
        case DELETE_TODODATA_VALUE:
            const copyData2 =  state.todoData.filter( ( item, index) => index!==action.id);

            return{
                ...state,
                todoData:copyData2
            }

                
        default:
            return state;
    }

}




