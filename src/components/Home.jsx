import React,{useState,useEffect} from 'react'
import { collection,getDocs } from 'firebase/firestore'
import { db } from '../firebase-config'
import { CircularIndeterminate } from '../loadinganimation'
import DisplayPost from './DisplayPost'
const Home = () => {
  const [allPost,setAllPost]=useState([])
  const [loading,setLoading]=useState(true)
  const [search,setSearch]=useState(null)
  const [searchRes,setSearchRes]=useState([])

  const postRef=collection(db,"post")

  useEffect(()=>{
    if(allPost && search){
     setSearchRes(allPost.filter((item)=>item.user.toLowerCase().includes(search.toLowerCase()) || item.prompt.toLowerCase().includes(search.toLowerCase())))
    }
  },[search])

  useEffect(()=>{
    setLoading(true)
    const getPosts=async()=>{
      await getDocs(postRef)
      .then(data=>{setAllPost(data.docs.map(doc=>({...doc.data(),id:doc.id})));
      setLoading(false)
    
    })
    }
    getPosts()
  },[])


  return (
    <div className='container mt-2' style={{marginTop:"40px"}}>
    <section className='max-w-7xl max-30px-auto'>
    <h1 className='font-extrabold text-[40px]'>The Community <span>Showcase</span></h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Browse Any Images Created Which Is Created By Amay</p>
       
       <div className='generate-form mt-16'>
        <input name='search' 
        placeholder='search your prompt...'
         type='text' onChange={e=>setSearch(e.target.value)}
        value={search}

         />
       </div>
       
        <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <CircularIndeterminate />
          </div>
            ):(
              (
                <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1'>
                  {searchRes && search ? searchRes.map(post=><DisplayPost post={post}/>)
                  :
                allPost && allPost.map(post=>(
                  <DisplayPost post={post}/>
                ))}
                </div>
             ) )
          }
        </div>
        </section>
    </div>
  )
}

export default Home
