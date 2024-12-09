import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title:{
        type: String,
        require: true,
        unique : true , 
    },
    author:{
        type: String,
        require: true,
    },
    publishYear : {
        type: String,
        require: true,
    }

},
{
    Timestamp: true ,
}
);

export const Book = mongoose.model('books',bookSchema);
