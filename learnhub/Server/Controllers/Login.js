import express from 'express'
import mongoose from 'mongoose' ;
import session from 'express-session';
import {User} from "./schemas/user.js"

const app=express();
app.use(express.json());

app.use(
    session({
        secret: "tanush",
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 60000 * 60,
        },
    })
);

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`server is listenig on port ${PORT}`)
})

mongoose.connect("mongodb://localhost/practice")
.then(()=>console.log("connected"))
.catch((err)=>console.log("error"))


const crt_login={
    user_login:async(request,response)=>{
        const UserName=request.body.UserName;
        const Password=request.body.Password;
      
    try{
        const user=await User.findOne({UserName});
        if (!(user)){
            return response.status(404).send("user is not there");
        }

        if (user.Password!=Password){
            return response.status(404).send("Invalid password");
        }
        
        request.session.loggedInUser={
            UserName:user.UserName,
            userID:user._id,
        };
        
        return response.status(200).send("Login success");

    }   
    catch(error){
        console.log(error);
    } 
    },
};

app.post("/login", crt_login.user_login);