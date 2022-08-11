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
  return (
    <div>

    <button onClick={() => setReqType(COMMENTS)}>Watch Comments</button>
    <button onClick={() => setReqType(POSTS)}>Watch Posts</button>
    {
      requestType === POSTS ?  
      data.map((post: any | null) =>{
        return (
          <div key={post.id}>
          <h2>Title : {post.title}</h2>
          <h3>Body  : {post.body}</h3>
        </div>
      )})
      : 
      data.map((comment : any | null) =>{
        return(
          <div key={comment.id}>
            <h2>Name : {comment.name}</h2>
            <h3>Comment : {comment.body}</h3>
          </div>
        )
      })
}
        </div>
)
}
export default FetchData