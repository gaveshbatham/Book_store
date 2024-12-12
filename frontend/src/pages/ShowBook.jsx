import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/spinner'


const ShowBook = () => {

  const [book,setBook] =useState({});
  const [loding,setLoding] =useState(false);
  const {id} =useParams();

  useEffect(()=>{
    setLoding(true)
    axios.get(`http://localhost:5555/books/${id}`).then((res)=>{
      setBook(res.data);
      setLoding(false)

    }).catch((err)=>{
      console.log(err);
    })
  },[])


  return (
    <div className='p-4'>
      <BackButton  />
      <h1 className='text-3xl my-4 '>Show Book</h1>

      {
        loding?(<Spinner/>):(
          <div className='flex flex-col border-2 border-sky-400 rounded-xl w-full p-4'>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>
            Id
              </span>
              <span>{book._id}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>
            Title
              </span>
              <span>{book.title}</span>
            </div>
            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>
            Author
              </span>
              <span>{book.author}</span>
            </div>

            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>
            Create Time
              </span>
              <span>{book.publishYear}</span>
            <span>{new Date(book.createAt).toString()}</span>
            </div>

            <div className='my-4'>
              <span className='text-xl mr-4 text-gray-500'>
            Last Update At
              </span>
              <span>{book.publishYear}</span>
            <span>{new Date(book.updateAt).toString()}</span>
            </div>



          </div>
        )
      }

     
    </div>
  )
}

export default ShowBook
