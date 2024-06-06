const nodemailer = require("nodemailer");
async function mailServerConnect(){
    console.log("TEST")
try{
const transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    auth: {
        user: 'srijansamanta1412@gmail.com',
        pass: 'XdrybrbST38MP2ag82'
    },
});
console.log("Mail Server Connected Successfully");
return transporter;
}
catch{
console.log("Couldn't connect to mail server");
}
}
module.exports={mailServerConnect};