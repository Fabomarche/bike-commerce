import { orderTypes } from "../types/order.types";
import { URL_API } from "../../constants/database/firebase.js"

const {GET_ORDERS, DELETE_ORDER} = orderTypes

export const getOrders = () => {
    return async dispatch => {
        try{
            const response = await fetch(`${URL_API}/orders.json`, {
                method: "GET",
                header: {
                    "Conten-Type": "application/json"
                }
            })
            const data = await response.json()
            const orders = Object.keys(data).map((key) => {
                return {
                    ...data[key],
                    id: key
                }
            })
            dispatch({
                type: GET_ORDERS,
                payload: orders,

            })
        }catch(err){
            console.log(err.message)
        }
    }
}

export const deleteOrder = (id)=> {
    return async (dispatch) => {
        try{
            await fetch(`${URL_API}/orders/${id}.json`, {
                method: "DELETE",
                headers:{
                    "Content-Type": "application/json"
                }
            })

            dispatch({
                type: DELETE_ORDER,
                orderId: id
            })
        }catch(err){
            console.log(err.message)
        }
    }
}
