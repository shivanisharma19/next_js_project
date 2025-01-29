import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const UserPage = () => {

    const router = useRouter()
    const [userName, setUserName] = useState(null)

    console.log(userName)
        
    useEffect(() => {
      console.log(router)
      const id = router.query.id
        const fetchUser = async() => {
           const data = await fetch(`https://dummyjson.com/users/${id}`)
           setUserName((await data.json()).firstName)
        }
        fetchUser()
      }, [router.query.id])

    
    return (
       userName ? <h1>This is {userName} page</h1> : <h2>Loading...</h2>
    )
  
  
  }
  
  export default UserPage