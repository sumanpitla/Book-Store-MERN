import express, { response } from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from './models/bookModel.js';
import cors from 'cors';

import booksRoute from './routes/booksRoute.js';

const app = express();



/*miidle ware for handling CORS policy
//option 1:Allow all orgins with Default of cors(*)*/
app.use(cors()) 

//option 2 :allow custom Orgins (for better control)
// app.use(
//     cors({
//         origin:'http://localhost:3000',
//         methods:['GET','POST','PUT','DELETE'],
//         allowedHeaders:['Content-Type'],
//     })
// );


  
//middleware for parsing request body
app.use(express.json());


app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send('welcome To MERN Stack ')
})


//middle ware for bookRoute
app.use('/books',booksRoute);


//database connection
mongoose.connect(mongoDBURL)
        .then(()=>{
            console.log('app connected to database');
            app.listen(PORT, () => {
                console.log(`app is listening to port: ${PORT}`);
            });
        })
        .catch((error)=>{
            console.log(error);
        });
    