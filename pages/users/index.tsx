/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react"
import Link from "next/link"

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async() => {
       const data = await fetch('https://dummyjson.com/users')
       setUsers(await data.json())
    }
      fetchUsers()
  }, [])

  if(users === null) 
    return <h2>Loading...</h2>

  return (
    <>
    <h1>This is user home page</h1>
    <h4> Users </h4>
    { // @ts-expect-error
     users && users.users && users.users.map((user) => (
      <Link href={`users/${user.id}`} key={user.id}>
     <li  style={{ color : 'yellowgreen'}}> {user.firstName}</li>
     </Link>
    ))}
    </>
  )


}

export default Users