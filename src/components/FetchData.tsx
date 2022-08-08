import { useQuery } from "@tanstack/react-query"
// import { useState } from "react"
import api from "../api/api"

const  FetchData = () => {
  // const [fetchData, setData] = useState([])

  const fetchData = async () =>{
    const response = await api.get('/posts')
    return response.data
  }
  
  const {data} = useQuery(["posts"], fetchData)
  
  console.log(data)
  return (
    <div>FetchData</div>
  )
}   
export default FetchData