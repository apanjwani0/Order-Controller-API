const mongoose=require('mongoose')
const connectionURL=process.env.connectionURL

mongoose.connect(connectionURL,{
    useNewUrlParser:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
    useCreateIndex:true
})

module.exports=mongoose