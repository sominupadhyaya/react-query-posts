import { useQuery } from "@tanstack/react-query"
import { FC, useState } from "react"
import api from "../api/api"

const  FetchData:FC = () => {
  const POSTS = '/posts'
  const [fetchedDatas, setDataValue] = useState<any[]>([])
  
  const fetchData = async () =>{
    const response = await api.get(POSTS)
    return response.data
  }

  const {data, status} = useQuery(["posts"], fetchData)
  
  // setData(data)

  console.log(data);

  if(status === 'loading') {
    return (
      <h1>Loading</h1>
    )
  } 

  


  
  return (
    <div>
    </div>
  )
}   
export default FetchData