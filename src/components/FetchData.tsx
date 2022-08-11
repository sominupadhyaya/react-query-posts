import { useQuery } from "@tanstack/react-query"
import { FC, useState } from "react"
import api from "../api/api"

const  FetchData:FC = () => {
  const POSTS = '/posts'
  const COMMENTS = '/comments'
  
  const [requestType, setReqType] = useState<string>(POSTS)

  const fetchData = async ({ queryKey } : null | any) =>{
    const response = await api(queryKey[1])
    
    return response.data
  }

  const {data, isLoading , isPreviousData} = useQuery(["posts" , requestType], fetchData , {
    keepPreviousData : true
  })
  
  
console.log(data)

  if(isLoading) {
    return (
      <h1>Loading</h1>
    )
  } 

  if(requestType === POSTS){
  data.map((post: any | null) =>{
    return (
      <div key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )  
})
}

if(requestType === COMMENTS){
  data.map((comment : any | null) =>{
    return(
      <div key={comment.id}>
        <div>{comment.name}</div>
        <p>{comment.body}</p>
      </div>
    )
  })
} 
  return (
    <>
    <button onClick={() => setReqType(COMMENTS)}>Watch Comments</button>
    <button onClick={() => setReqType(POSTS)}>Watch Posts</button>
    </>
)
}
export default FetchData