const initialState ={
    c_price:0
}
const pizzaReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'ADD_PRICE':
            return {
                ...state,
                c_price: action.payload
            }
        default:
            return state;
    }
}

export default pizzaReducer;