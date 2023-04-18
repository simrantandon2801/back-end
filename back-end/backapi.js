const router = require('express').Router();
const nodemailer = require('nodemailer');
router.post('/backapi',(req,res)=>{
	console.log(req.body)
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sales@hubhawks.com',
          pass: 'rkcknmtciawqanpq'
        }
	});
	transporter.verify((err, success) => {
		err
		  ? console.log(err)
		  : console.log(`=== Server is ready to take messages: ${success} ===`);
	});
	console.log(req.body, 'hhh');

	let mailOptions = {
		from: `simrantandon2801@gmail.com`,
		to: 'sales@hubhawks.com',
		subject: `Message from author:- Dashboard`,
		html:`hhh`
	  };
 
	
     
    transporter.sendMail(mailOptions, function(error, info){
        if (error)
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        } 
        else
        {
          res.json({status: true, respMesg: 'Email Sent Successfully'})
        }
     
	});
	
	  
	  
});

module.exports=router;
