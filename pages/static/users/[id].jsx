const UserPage = (props) => {
    return (
        <>
        <h1> This is {props.data.firstName} details page</h1>
        </>
    )
}

export const getStaticPaths = async() => {
    const data = await( await fetch('https://dummyjson.com/users')).json() 
    const allUserIds = data.users.map((user) => user.id) 

    return {
        paths : allUserIds.map((userId) => ({ params : { id: `${userId}` } })),
        fallback: false
    }
}


export const getStaticProps = async(context) => {
    const id= context.params.id
    const data = await( await fetch(`https://dummyjson.com/users/${id}`)).json() 
    return {
        props : {
            data,
        }
    }
}


export default UserPage