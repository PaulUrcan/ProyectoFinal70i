import {useContext} from 'react'
import ContextUser from '../components/ContextUser'
const Admin = () => {
  const {user}=useContext(ContextUser)
  return (
    <div className={`bg-${user.theme}`}>
    <div className="row">
        <div className="col main">
            <h1>Admin</h1>
        </div>
    </div>
</div>
  )
}

export default Admin