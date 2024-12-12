import React , { useState , useEffect} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'



const DeleteBook = () => {

  const [loding,setLoding] =useState(false)
  const navigate  =useNavigate();
  const {id} =useParams();

  const handilDeleteBook = (()=>{
    setLoding(true)

    axios.delete(`http://localhost:5555/books/${id}`)
    .then(()=>{
      setLoding(false)
      navigate('/')
    })
    .catch((err)=>{
      setLoding(false)
      alert('an error has happan')
      console.log(err)
    })
  })




  return (
    <div className='p-4'>
      <BackButton/>

      <h1 className='text-3xl my-4'>Edit Book</h1>

      {
        loding?(<Spinner/>):''
      }

      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto' >

        <button className='p-4 bg-red-600 text-white m-8 w-full' onClick={handilDeleteBook} >
          Yes , Deletet it
        </button>

      </div>


    </div>
  )
}

export default DeleteBook
