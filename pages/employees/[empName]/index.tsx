import { useRouter } from "next/router"

const EmployeesDetails = () => {
  const router = useRouter()
  const { empName } = router.query
    return (
      <>
      <button style={{color: 'yellow', background: "green"}} onClick={() =>  router.push(`/employees/${empName}/settings`)}> Settings Page</button>
      <br/>
      <button style={{color: 'yellow', background: "green"}} 
        onClick={() =>  router.push({
            pathname: `/employees/[employee]/settings`,
            query: { employee: 'john'}}
        )}
       > 
        John Settings Page
      </button>
      <h1>This is {router.query.empName} employee page</h1>
      <br/>
      <button style={{color: 'yellow', background: "green"}} onClick={() =>  router.replace(`/`)}> Home Page</button>
      <br/>
      <button style={{color: 'yellow', background: "green"}} onClick={() =>  router.reload()}> Reload</button>
      </>
    )
  
  
  }
  
  export default EmployeesDetails