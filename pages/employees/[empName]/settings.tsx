import { useRouter } from "next/router"

const SettingPage = () => {

    const { query } = useRouter()

    return (
      <h1>This is {query.empName} settings page</h1>
    )
  
  
  }
  
  export default SettingPage