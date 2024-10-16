
import { signOut } from "firebase/auth";
import { auth } from "../utiles/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utiles/userSlice";
import { useDispatch } from "react-redux";
import { logo, originalLanguage } from '../utiles/userconstant';
import { toggleGptSearch } from "./../utiles/GptSlice";
import { addGoogleTranslator } from "../utiles/CongigTranslator";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browser");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);











  const user = useSelector((store) => store.user); // Adjust to your actual state structure
  const handleSignout = () => {
    signOut(auth).then(() => {
      // navigate("/")
    }).catch((error) => {
      // navigate("/error")
    });
  }
  const handleSearchgptsearch = (() => {
    dispatch(toggleGptSearch())
  })
  const handleLanguageChange = (e) => {
    dispatch(addGoogleTranslator(e.target.value))
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img src={logo} alt="logo" className="w-44"></img>


      {user ? (
        <div className="flex p-2 items-center gap-2">
          <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>

            {originalLanguage.map((res) => <option key={res.identifer} value={res.identifer} >{res.search}</option>)}
          </select>
          <button className="py-2 px-4 text-white mx-4 my-2 rounded-lg bg-purple-300" onClick={handleSearchgptsearch}>Gpt search</button>

          <img
            className="w-12 h-12 rounded-full"
            src="https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
            alt="user-logo"
          />
          <button
            className="font-bold text-white cursor-pointer"
            onClick={handleSignout}
          >
            Sign out
          </button>
        </div>
      ) : (
        // Optionally add content here if you want to show something when the user is not logged in
        <>
        </>
      )}

    </div>
  )
}

export default Header