import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/FirebaseInt";

export const authContext=createContext(null)


const AuthProvider = ({children}) => {
    const provider=new GoogleAuthProvider()
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const singInWithGoogle=()=>{
        return signInWithPopup(auth,provider)
    }

    const manageProfile = (name,image) =>{
        return updateProfile(auth.currentUser,{
             displayName:name,photoURL:image
         })
       }
    const singOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }
    
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
           
             setUser(currentUser)  
             setLoading(false)

             
      if (!currentUser) {
        setFavorites([]); 
      }
             
        })
        return()=>{
            unSubscribe()
        }
    } ,[])

    const [favorites, setFavorites] = useState([]);

    
  useEffect(() => {
    if (user?.email) {
      const storedFavorites = JSON.parse(localStorage.getItem(user.email)) || [];
      setFavorites(storedFavorites);
    } else {
      setFavorites([]); 
    }
  }, [user?.email]);

  const addFavorite = (movie) => {
    const updatedFavorites = [...favorites, movie];
    setFavorites(updatedFavorites);
    localStorage.setItem(user.email, JSON.stringify(updatedFavorites));
  };

  const removeFavorite = (movieId) => {
    const updatedFavorites = favorites.filter((movie) => movie._id !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem(user.email, JSON.stringify(updatedFavorites));
  };

  const clearUserDataOnLogout = () => {
    setFavorites([]); 
  };

    const authMember={
        loading,
        createUser,
        singInUser,
        singOutUser,
        singInWithGoogle,
        manageProfile,
        user,
        addFavorite,
        favorites ,
        removeFavorite,
        clearUserDataOnLogout,
    }

    return (
        <authContext.Provider value={authMember}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;