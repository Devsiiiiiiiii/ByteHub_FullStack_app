const ordersReducer = (state = null , action) => {
    switch (action.type){
        case "GET_ORDERS" :
            return state;

            case "SET_ORDERS" :
                return action.orders;
            
            default:
                return state;

    }
};

export default ordersReducer;