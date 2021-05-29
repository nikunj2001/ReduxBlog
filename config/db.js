const mongoose = require('mongoose')
module.exports=  connect =async()=>{
    try {
        const response =await mongoose.connect('mongodb+srv://nikunj:nikunj@cluster0.n5t54.mongodb.net/blog?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true});
        console.log('connection created');
    } catch (error) {
        console.log(error);
        
    }

}