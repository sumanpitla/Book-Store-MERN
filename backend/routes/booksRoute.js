import express from 'express';
import { Book } from '../models/bookModel.js'

const router=express.Router();



//route for a save a new book
router.post('/',async(request,response)=>{
    try{
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishyear
            ){
                return response.status(400).send({
                    message:'send all required fields:title,author ,publishyear',
                })
            }
            const newBook={
                title:request.body.title,
                author:request.body.author,
                publishyear:request.body.publishyear,

            }
            const book=await Book.create(newBook);
            console.log("book:{book}");
            return response.status(200).send(book);
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});
//Route for get all Books from database 
router.get('/',async(request,response)=>{
    try{
        const books=await Book.find({});
        return response.status(200).json({
            count:books.length,
            data:books,
        })

    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

//Route for get One Book from database by id
router.get('/:id',async(request,response)=>{
    try{
        const { id }=request.params;
        const book=await Book.findById(id);
        return response.status(200).json(book);

    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});


//Route for update One Book from database by id
router.put('/:id',async(request,response)=>{
    try{
        if(
            !request.body.title ||
            !request.body.author ||
            !request.body.publishyear
            ){
                return response.status(400).send({
                    message:'send all required fields:title,author ,publishyear',
                })
            }
            const { id }=request.params;
            const result=await Book.findByIdAndUpdate(id,request.body);
            if (!result){
                return response.status(404).json({message:'book not found'});
            }
            else{
                return response.status(200).json({message:'book updated successfully'});
            }
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

//router for Delete a Book
router.delete('/:id',async(request,response)=>{
    try{
            const { id }=request.params;
            const result=await Book.findByIdAndDelete(id,request.body);
            if (!result){
                return response.status(404).json({message:'book not found'});
            }
            else{
                return response.status(200).json({message:'book delete successfully'});
            }
    }
    catch(error){
        console.log(error.message);
        response.status(500).send({message:error.message});
    }
});

export default router;