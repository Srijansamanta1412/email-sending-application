const mongoose=require('mongoose');

const urlSchema=new mongoose.Schema({
    sned_From:{
        type:String
    },
    send_To:{
        type:String
    },
    emailData:{
        type:String
    }
});

const urlModel=mongoose.model('Emails',urlSchema);

module.exports={
    urlModel
}