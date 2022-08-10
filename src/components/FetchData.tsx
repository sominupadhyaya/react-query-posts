import { useQuery } from "@tanstack/react-query"
import { FC, useState } from "react"
import api from "../api/api"

const  FetchData:FC = () => {
  const POSTS = '/posts'
  const COMMENTS = '/comments'
  
  const [requestType, setReqType] = useState<string>(POSTS)

  const fetchData = async ({ queryKey }) =>{
    const response = await api(queryKey[1])
    
    return response.data
  }

  const {data, status , isPreviousData} = useQuery(["posts" , requestType], fetchData , {
    keepPreviousData : true
  })
  
  


  if(status === 'loading') {
    return (
      <h1>Loading</h1>
    )
  } 

  


  
  return (
    <>
    <button onClick={() => setReqType(COMMENTS)}>Watch comments</button>
    {
      data.map((post: any | null) =>{
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )  
      })
    }
    </>
  )
}   
export default FetchData