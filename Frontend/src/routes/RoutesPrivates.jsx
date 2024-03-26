import {useContext} from 'react';
import {Navigate,Outlet} from 'react-router-dom'
import ContextUser from '../components/ContextUser';

const RoutesPrivates = () => {
    const {user}=useContext(ContextUser);
    console.log(user);
    if(user.admin){
        return <Outlet/>
    }else{
        return <Navigate to='/'/>
    }
  
}

export default RoutesPrivates