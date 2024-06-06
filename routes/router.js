const express = require('express');
const router = express.Router();
const saveEmailDetails=require('../controllers/email_Controller');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
// Configure multer to use diskStorage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = 'uploads/';
        if (!fs.existsSync(uploadDir)){
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
       // cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
       cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });
router.get('/',(req,res)=>{
    res.sendFile('index.html', { root: 'static' });
})
router.post('/sendMail',upload.array('files', 12),saveEmailDetails);
router.get('/:id',(req,res)=>{
    console.log(req.params.id);
    res.json({"message":"TEST"})
})

module.exports=router;