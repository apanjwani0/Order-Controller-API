const express=require('express')
const router=new express.Router()
const Order=require('../models/order')

router.post('/orders',async (req,res)=>{
    const order=new Order(req.body)
    //console.log(order)
    try{
        await order.save()
        console.log('New Order Accepted!')
        res.status(201).send({order})
    }catch(e){
        //console.log(e)
        if(e.code === 11000){
            return res.status(409).send({error:"orderID already exists !"})
        }
        res.status(400).send(e)
    }
})

router.get('/orders',async (req,res)=>{
    const orders=await Order.find({})
    try{
        if(!orders){
            console.log('No orders yet')
        }
        res.status(200).send({orders})
    }catch(e){
        //console.log(e)
        res.status(400).send(e)
    }
})

router.get('/orders/:orderID',async (req,res)=>{
    const orderID=req.params.orderID
    const order=await Order.findOne({orderID})
    try{
        if(!order){
            return res.status(404).send({error:`Currently there is no order with OrderId = ${orderID} .`})
        }
        res.status(200).send({order})
    }catch(e){
        res.status(400).send(e)
    }
})

router.patch('/orders/:orderID',async (req,res)=>{
    const orderID=req.params.orderID
    const updates=Object.keys(req.body)
    const validUpdates=['isPaid','isFullfilled','tracking','payment','amount','shipping_address','billing_address']
    const isValidUpdate = updates.every((update)=>{
        return validUpdates.includes(update)
    })
    if(!isValidUpdate){
        return res.status(400).send({error: 'Invalid Update'})
    }
    const order=await Order.findOne({orderID})
    try{
        if(!order){
            res.status(404).send({error:`No order with OrderId = ${orderID} found to update`})
        }
        updates.forEach((update)=>{
            order[update]=req.body[update]
        })
        await order.save()
        res.status(200).send(order)
    }catch(e){
        //console.log(e)
        res.status(400).send(e)
    }
})

router.delete('/orders/:orderID',async (req,res)=>{
    const orderID=req.params.orderID
    const order=await Order.findOne({orderID})
    try{
        if(!order){
            res.status(404).send({error:`No order with OrderId = ${orderID} found to delete`})
        }
        await order.remove()
        res.status(200).send()
    }catch(e){
        //console.log(e)
        res.status(400).send(e)
    }
})

module.exports=router