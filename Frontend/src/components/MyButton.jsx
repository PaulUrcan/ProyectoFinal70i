import { useContext, useState } from 'react';
import UserContext from './ContextUser';
import { Link} from "react-router-dom";


const MyButton = () => {
    
    const {user,setUser}=useContext(UserContext);
    
    const changeTheme=()=>{
        if (user.theme==="light") {
          let auxUser =user;
          auxUser.theme="dark";
          setUser({id: user.id,
          user: user.user,
          password: user.password,
          email:user.email,
          theme:"dark",
          colorText:"light",
          admin:user.admin})
          
          
        }else{
          let auxUser =user;
          auxUser.theme="light";
          setUser({id: user.id,
            user: user.user,
            password: user.password,
            email:user.email,
            theme:"light",
            colorText:"dark",
            admin:user.admin})
          console.log(user.theme);
        }
    }
  return (
    <Link className={`link text-${user.colorText}`} onClick={changeTheme}>Tema</Link>
  )
}

export default MyButton