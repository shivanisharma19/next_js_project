/* eslint-disable @typescript-eslint/ban-ts-comment */
 // @ts-ignore
const Users = (props) => {

  return (
    <>
    <h1>This is user home page</h1>
    <h4> Users </h4>
    {  // @ts-ignore
     props.data.users.map((user) => <li key={user.id}>{ user.firstName}</li>)}
    </>
  )


}

export const getServerSideProps = async() => { 
    const data = await( await fetch('https://dummyjson.com/users')).json()
    return { 
        props : {
            data
    }}}

export default Users