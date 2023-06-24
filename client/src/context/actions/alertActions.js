export const alertSuccess = () => {
    return {
        type: "SET_SUCCESS",
        alert : {type : "success", message : message},
    }
}
export const alertWarning = () => {
    return {
        type : "SET_WARNING",
        alert : {type : "warning", message : message},
    }
}
export const alertDanger = () => {
    return {
        type : "SET_DANGER",
        alert : {type : "danger", message : message},
    }
}
export const alertInfo = () => {
    return {
        type : "SET_INFO",
        alert : {type : "info", message : message},
    }
}

export const alertNULL = () => {
    return {
        type : "SET_ALERT_NULL",
        alert : null,
    }
}