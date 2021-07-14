const { TransPayment_TBL, Order_TBL, Product_TBL, Customer_TBL, User_TBL } = require('../../../models')
const { Op } = require("sequelize");
const query = ({ connects, dotenv }) => {
    dotenv.config()

    return Object.freeze({
        insertOders,
        findOneOrder,
        findAllOrder,
        queryupdateOder,
        updateOrderNow,
        updateProductQuantity,
        updateTranspay,
        createTransactionID,
        retrieveOderbyTransID

    })

    async function createTransactionID({ data }) {
        const { TransactionDate } = data
        const generateTransactionID = await TransPayment_TBL.create({
            TransDate: TransactionDate
        })

        return generateTransactionID
    }

    async function insertOders({ data, CreatetransID,TransPaymentDetails }) {
      
        const TransPaymentTBLId = CreatetransID.id      
        const newDtails = TransPaymentDetails.details
        for (let x = 0; x < newDtails.length; x++) {
            const Insert_Order = await Order_TBL.create({
                ProductTBLId: newDtails[x].id,
                Quantity: newDtails[x].Quantity,
                TransPaymentTBLId,
            })
            let temQuantity = newDtails[x].Quantity
          //  console.log(`temQuantity: ${temQuantity}`)
           // console.log("prodID: ",newDtails[x].id )

            let update_productQuantity = await Product_TBL.findOne({ where: { id: newDtails[x].id } })
           // console.log("")c
          // console.log("PRODUCT QUAN = ", update_productQuantity)
            if (update_productQuantity.Quantity >= temQuantity) {
                update_productQuantity.Quantity -= temQuantity
            } else {
                throw new Error("Product Quantity is greater than current stock ")
            }
            let updateProduct = await update_productQuantity.save()
        }
        const updated_TransPayment = await TransPayment_TBL.update(data,{ where: { id: TransPaymentTBLId } })
        return updated_TransPayment

    }

    async function retrieveOderbyTransID({ CreatetransID }) {
        const { id } = CreatetransID
        const selectByTransID = await TransPayment_TBL.findOne({
            where: { id },
            include: [
                { model: Customer_TBL, attributes: ['id','CusName', 'CusAddress', 'CusContact'] },
                { model: User_TBL, attributes: ['id','FName'] }
            ], attributes: ['id','TransDate', 'TotalAmount', 'TenderedAmount', 'Change', 'Trans_Status']
        })
        return selectByTransID
    }


    async function findOneOrder({ id }) {
        const selectOne = await Order_TBL.findAll({
            where: { TransPaymentTBLId: id }, include: [Product_TBL]
        })
        return selectOne
    }

    async function findAllOrder() {
        const selectall = await Order_TBL.findAll({ order: [['TransPaymentTBLId', 'DESC']], include: [TransPayment_TBL, Product_TBL] })
        return selectall
    }

    async function queryupdateOder({ data }) {
        const data_array = [];

        const {
            TransPaymentTBLId,
            TransPaymentDetails,
        } = data

        const newDetails = TransPaymentDetails.details

        for (let limit = 0; limit < TransPaymentDetails.details.length; limit++) {
            const selectOne = await Product_TBL.findOne({
                where: { ProdDesc: newDetails[limit].Productname }
            })


            const updateOrder = await Order_TBL.findAll({
                where: {
                    TransPaymentTBLId
                }
            })

            let orderDetails = {};
            orderDetails.getID = updateOrder[limit].id
            orderDetails.getProdID = selectOne.id
            orderDetails.getQuantity = newDetails[limit].quantity
            orderDetails.getTransID = TransPaymentTBLId

            data_array.push(orderDetails)

        }
        return data_array

    }

    async function updateOrderNow({ res1 }) {
        let upt = ''
        for (let res1Size = 0; res1Size < res1.length; res1Size++) {

            const updatedOrder = await Order_TBL.findOne({ where: { id: res1[res1Size].getID } })
            updatedOrder.ProductTBLId = res1[res1Size].getProdID
            updatedOrder.Quantity = res1[res1Size].getQuantity
            updatedOrder.TransPaymentTBLId = res1[res1Size].getTransID
            upt = await updatedOrder.save()
        }
        // console.log(res1.length)
        return upt

    }


    async function updateProductQuantity({ data, res1 }) {
        const {
            TransPaymentTBLId,
            TransPaymentDetails,

        } = data

        const newDetails = TransPaymentDetails.details
        let updatedQuantity = 0
        let Order_quan = 0
        let Prod_quan = 0
        let upt = ''

        for (let limit = 0; limit < res1.length; limit++) {
            const getOrder_Quan = await Order_TBL.findAll(
                {
                    where: {
                        TransPaymentTBLId
                    }

                })
            Order_quan = getOrder_Quan[limit].Quantity
            console.log("Order", Order_quan)
            const getOldProd_Quan = await Product_TBL.findOne({ where: { id: res1[limit].getProdID } })
            Prod_quan = getOldProd_Quan.Quantity
            console.log("Oldprod", Prod_quan)
            updateQuantity = Prod_quan + Order_quan
            console.log("total", updateQuantity)
            console.log("id: ", res1[limit].getID)
            getOldProd_Quan.Quantity = updateQuantity - res1[limit].getQuantity
            upt = await getOldProd_Quan.save()

        }
        return upt
    }

    async function updateTranspay({ data }) {
        const {
            TransPaymentTBLId,
            TotalAmount,
            TenderedAmount,
            Change,
            CustomerName,
            UserName
        } = data
        const updateTranspayment = await TransPayment_TBL.findOne({ where: { id: TransPaymentTBLId } })
        updateTranspayment.TotalAmount = TotalAmount
        updateTranspayment.TenderedAmount = TenderedAmount
        updateTranspayment.Change = Change
        updateTranspayment.CustomerName = CustomerName
        updateTranspayment.UserName = UserName
        const update = await updateTranspayment.save()
    }

}

module.exports = query