/* eslint-disable @typescript-eslint/ban-ts-comment */
import Link from "next/link"
import useSWR from "swr"
// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json())

const Users = () => {

  const { data, error } = useSWR('https://dummyjson.com/users', fetcher)

  if(error) 
    return <h2> Error Page</h2>

  if(!data)
    return <h2> Loading...</h2>

  return (
    <>
    <h1>This is user home page</h1>
    <h4> Users </h4>
    { // @ts-expect-error
     data && data.users && data.users.map((user) => (
      <Link href={`users/${user.id}`} key={user.id}>
     <li  style={{ color : 'yellowgreen'}}> {user.firstName}</li>
     </Link>
    ))}
    </>
  )


}

export default Users