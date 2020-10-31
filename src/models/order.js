const mongoose=require('../db/mongoose')

// console.log(new mongoose.Types.ObjectId)
// console.log(new mongoose.Types.ObjectId)
// console.log(new mongoose.Types.ObjectId)
// console.log(new mongoose.Types.ObjectId)

const orderSchema=new mongoose.Schema({
    orderID:{
        type:String,
        unique:true,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    amount:{
        type:Number,
        required:true,
    },
    billing_address:{
        type:String,
        required:true,
        trim:true
    },
    shipping_address:{
        type:String,
        required:true,
        trim:true
    },
    payment:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    isPaid:{
        type:Boolean,
        default:false
    },
    isFullfilled:{
        type:Boolean,
        default:false
    },
    tracking:{
        type:mongoose.Schema.Types.ObjectId
    }
})



orderSchema.methods.toJSON=function(){
    const order=this
    const orderObject =order.toObject()
    delete orderObject.__v
    delete orderObject._id

    return orderObject
}


const Order=mongoose.model('orders',orderSchema)

module.exports=Order