import { useRouter } from "next/router"

const UserPage = () => {

    const { query } = useRouter()
    
    return (
      <h1>This is {query.id} page</h1>
    )
  
  
  }
  
  export default UserPage