 // ****File Management****
let fs=require('fs');


// ****Backend Management****
let express=require('express');
let app=express();

let path=require('path');
app.use(express.static(path.join(__dirname,"public")));//to make available the imgs or any other files(like css files) to express

app.use(express.urlencoded()) ;   //Used for taking data from backend

app.get("/",(req,res) =>{

    
    res.sendFile(path.join(__dirname,"home.html"));
})
    
app.get("/login",(req,res) =>{
    
    res.sendFile(path.join(__dirname,"login.html"));
    
})

app.post("/login",(req,res) =>{
    
    let name=req.body.name;
    let faculty=req.body.faculty;
    let department=req.body.department;
    let studid=req.body.studid;
    let number=req.body.number;
    let email=req.body.email;
    let createpass=req.body.createpass;
    let confirmpass=req.body.confirmpass;
    res.sendFile(path.join(__dirname,"login.html"));

    con.query("insert into studentsinfo(name,faculty,department,studentid,mobilenumber,email,password) values(?,?,?,?,?,?,?);",[name,faculty,department,studid,number,email,createpass],(error,result) =>{
        
     })

})


// ****DataBase Management****
 let mysql=require('mysql');

let con=mysql.createConnection({

    host:"localhost",
    user:"root",
    password:"1234@#$IIt",
    database:"StudentsFET"
})

con.connect((err) =>{

    if(err) throw err;
    else
    console.log("Connected to Database\n");

})




app.listen(80,(err) =>{
    if(err) throw err;
    else
    console.log("We are Live");
})
