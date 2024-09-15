
import { signOut } from "firebase/auth";
import { auth } from "../utiles/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate =useNavigate();
  const user = useSelector((store) => store.users);
  console.log(user,'s')
  const handleSignout = ()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")

    });
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo"  className="w-44"></img>
     
     
      {user && (<div className="flex p-2 items-center gap-2">
        <img className="w-12 h-12" src="https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e" alt="user-logo"></img>
        <button className="font-bold text-white cursor-pointer" onClick={handleSignout} >Sign out</button>
      </div>)} 
    </div>
  )
}

export default Header