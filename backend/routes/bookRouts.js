import express from 'express'
import {Book} from '../models/bookModels.js'

const  router= express.Router();

// router for seave a new book
router.post("/", async (req, res) => {
    try {
      if (!req.body.title || 
          !req.body.publishYear || 
          !req.body.author) {
        return res.status(400).send({ msasge: "send all book  data" });
      }
  
      const newBook = {
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
      };
  
      const book = await Book.create(newBook);
  
      return res.status(201).json(book);
    } catch (err) {
      console.log(err.massage);
      res.status(500).send({ mssag: err.massage });
    }
  });
  
  // get all books from DB
  
  router.get("/", async (req, res) => {
    try {
      const books = await Book.find({});
      return res.status(200).json({ count: books.length, DATA: books });
    } catch (err) {
      res.status(500).send({ mssage: err.massage });
    }
  });
  
  // get one book by id
  router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const book = await Book.findById(id);
  
      // console.log(book.size)
  
      // if (!book) {
      //   return res.status(400).json({ mssg: "book in not found in the DB" });
      // }
  
          return res.status(200).json(book);
  
    } catch (err) {
      res.status(500).send({ mssage: err.massage });
    }
  });
  
  // router for updateing a book
  router.put("/:id", async (req,res)=>{
      try{
          if (!req.body.title || 
              !req.body.publishYear || 
              !req.body.author) {
            return res.status(400).send({ msasge: "send all require fildes" });
          }
          
          const {id}=req.params
  
          const result =await Book.findByIdAndUpdate(id,req.body)
          console.log("your result is" ,result)
          if(!result) {
              return res.status(404).json({ mssg: "book not found"})
          }
  
          return res.status(200).json({mssg:"book updates succesfully"})
  
  
      }catch (err) {
      res.status(500).send({ mssage: err.massage });
    }
  })
  
  
  // router for deleting a book 
  router.delete('/:id', async (req,res)=>{
  
      try{
  
          const {id}= req.params
  
          const result = await Book.findByIdAndDelete(id);
          
          console.log(result)
  
          if(!result){
              return res.status(404).json({mssg : 'book in not found'})
          }
          return res.status(200).json({mssg:'book is deleted'})
  
      }catch (err) {
          res.status(500).send({ mssage: err.massage });
        }
  
  
  })


  export default  router;