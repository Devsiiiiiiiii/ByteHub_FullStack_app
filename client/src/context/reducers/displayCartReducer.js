const  displayCartReducer = (state = false, action) => {
    switch (action.type){
        case "SET_CART_ON" :
            return true;

            case "SET_CART_OFF" :
                return false;
            
            case "GET_CART_DISPLAY_STATE" :
                return state;    

            default:
                return state;

    }
};

export default displayCartReducer;