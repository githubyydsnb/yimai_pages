import request from "../utils/request.js";

const baseUrl = "/orderDetail";

const addOrderDetail = (orderDetails) => {
    console.log(orderDetails,toString())
    return request.post(baseUrl + '/addOrderDetail', {
        orderDetails:orderDetails.toString(),
    })
}
const getOrderDetailList = (orderDetail,page) => {
  return request.post(baseUrl+"/getOrderDetailList",{
      orderDetail:orderDetail,
      page:page
  })
}
export {
    addOrderDetail,
    getOrderDetailList
}