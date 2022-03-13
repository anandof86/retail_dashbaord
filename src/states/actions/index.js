export function revenueAction(data) {
    return(dispatch) =>{
        dispatch({
            type: "SET_REVENUE",
            payload : {"revenue" :data.data}
        })
    }
}

export function  progressAction(data){
    return(dispatch) =>{
        dispatch({
            type: "SET_PROGRESS",
            payload : {"progress" :data.data}
        })
    }
}