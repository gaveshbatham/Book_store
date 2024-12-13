import React , {useEffect,useState} from 'react'
import axios from 'axios';
import Spinner from '../components/spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import BooksTable from '../components/home/BooksTable';
import BooksCard from '../components/home/BooksCard';




const Home = () => {
  const [books,setBooks] =useState([]);
  const [loding , setLoding] = useState(false);
  const [showType,setShowType] = useState('table')


  useEffect(()=>{
    setLoding(true)
    axios.get('http://localhost:5555/books')
    .then((res)=>{
      console.log(res.data.DATA)
      setBooks(res.data.DATA);
      setLoding(false);
    })
    .catch((err)=>{
      console.log(err)
      setLoding(false)
    })
  },[])


  return (
    <div className='p-4'>

      <div className='flex justify-center items-center gap-x-4' >

      <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
      onClick={()=>setShowType('table')} >
        Table
      </button>

      <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
      onClick={()=>setShowType('card')} >
        Card
      </button>

      </div>


      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8' >Book List</h1>
        <Link to='/books/create' >
        <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {
        loding?(<Spinner/>):(showType=='table'?(<BooksTable books={books} />):
        (<BooksCard books={books}/>)
          
        )
      }

    </div>
  )
}

export default Home
