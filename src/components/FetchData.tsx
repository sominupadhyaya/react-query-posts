import { useQuery } from "@tanstack/react-query"
import { FC } from "react"
import api from "../api/api"

const  FetchData:FC = () => {
  const POSTS = '/posts'
  
  const fetchData = async () =>{
    const response = await api.get(POSTS)
    return response.data
  }

  const {data, status} = useQuery(["posts"], fetchData)
  


  if(status === 'loading') {
    return (
      <h1>Loading</h1>
    )
  } 

  


  
  return (
    <>
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